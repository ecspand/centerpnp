/// <reference path="../typings/ecspand/center.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />

// Weitere Informationen ueber die KendoUI-Diagramme entnehmen Sie bitte der Online-Dokumentation von Kendo unter
// http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart

class Element_tabsDiagramm extends ecspand.Templates.ElementBase {

    templateID = "elementTabsDiagramm-Template";
    tabStrip: ecspand.Controls.TabStrip = null;

    // Die verschiedenen Kendo Diagramme
    private charts = [{
            chartTitle: "Area",
            chartType: "area"
        },{
            chartTitle: "Bar",
            chartType: "bar"
        },{
            chartTitle: "Bubble",
            chartType: "bubble"
        },{
            chartTitle: "Bullet",
            chartType: "bullet"
        },{
            chartTitle: "Donut",
            chartType: "donut"
        },{
            chartTitle: "Funnel",
            chartType: "funnel"
        },{
            chartTitle: "Line",
            chartType: "line"
        },{
            chartTitle: "Pie",
            chartType: "pie"
        },{
            chartTitle: "Polar",
            chartType: "polar"
        },{
            chartTitle: "Radar",
            chartType: "radar"
        },{
            chartTitle: "Scatter",
            chartType: "scatter"
        }
    ];

    // Die verschiedenen Kendo-Farbpaletten
    private chartThemes = [{
            themeTitle: "Black",
            themeType: "Black"
        },{
            themeTitle: "BlueOpal",
            themeType: "BlueOpal"
        },{
            themeTitle: "Bootstrap",
            themeType: "Bootstrap"
        },{
            themeTitle: "Default",
            themeType: "Default"
        },{
            themeTitle: "Flat",
            themeType: "Flat"
        },{
            themeTitle: "HighContrast",
            themeType: "HighContrast"
        },{
            themeTitle: "Material",
            themeType: "Material"
        },{
            themeTitle: "MaterialBlack",
            themeType: "MaterialBlack"
        },{
            themeTitle: "Metro",
            themeType: "Metro"
        },{
            themeTitle: "MetroBlack",
            themeType: "MetroBlack"
        },{
            themeTitle: "Moonlight",
            themeType: "Moonlight"
        },{
            themeTitle: "Silver",
            themeType: "Silver"
        },{
            themeTitle: "Uniform",
            themeType: "Uniform"
        }
    ];

    constructor(template: ecspand.Templates.TemplateBase, vm: any, tabStrip: ecspand.Controls.TabStrip, options?: ecspand.Templates.ElementBaseOptions) {
        super(template, vm, options);
        this.tabStrip = tabStrip;

        var chartConfig: ChartConfiguration = this.getChartConfiguration();
        $(document.body).append(chartConfig.getHtml());
    }

    init(): JQueryPromise<any> {
        var dfd = $.Deferred();
        var self = this;
        var index = this.viewModel.get("index");
        var title = this.viewModel.get("title()");

        this.tabStrip.add({
            title: title,
            contentLoaded: this.onContentLoaded.bind(this)
        }, index >= 0 ? index : undefined);

        this.tabStrip.element.find("li:contains(" + title + ")").attr("id", this.id).addClass("editable"); //Hover bei dem Tab

        super.init().done(() => {

            dfd.resolve();
        });

        return dfd.promise();
    }

    // Wird automatisch aufgerufen, wenn der Tab aufgerufen wird. Hier wird das HTML des Diagramms und der Datensatz der OData-Quelle geladen
    onContentLoaded(args: any) : void {
        var container = $(args.contentElement);

        var chart: Chart = this.getChart(this.viewModel.get("selectedChart"));
        var customChartName = this.viewModel.get("customChartName");
        var chartTheme = this.viewModel.get("selectedTheme");

        chart.set_theme(chartTheme);

        if(customChartName != ""){
            chart.set_title(customChartName);
        }
        else{
            chart.set_title(this.viewModel.get("defaultChartName"));
        }
        
        var customChartHeight = this.viewModel.get("customHeigth");
        if(customChartHeight != ""){
            chart.set_height(customChartHeight);
        }
        else{
            chart.set_height(this.viewModel.get("defaultHeigth"));
        }

        var dataSourceUrl = this.viewModel.get("dataSourceUrl").replace(/"/g, "'");
        ODataHelper.get(dataSourceUrl).done(oData => {
            this.viewModel.set("chartDataSource", oData);
            var content = $(chart.get_Html());
            $.getScript("/_layouts/15/Scripts/kendo.dataviz.js", () => {
                $("#chartContainer").remove();
                container.append(content);
                kendo.bind(container, kendo.observable(this.viewModel));
            });
        });
    }

    initInternal(): JQueryPromise<any> {
        var dfd = $.Deferred();
        dfd.resolve()
        return dfd.promise();
    }

    getElementTemplate(): string {

        var template = "// [EDS:{0}]\n" +
            "var elmselftemp = (_this || this), settings = '{2}',\n" +
            "btn = new Element_tabsDiagramm(elmselftemp, JSON.parse(settings), elmselftemp.tabStrip, elmselftemp.{1}Options || {});\n" +
            "elmselftemp.deferreds.push(btn.init());\n" +
            "// [EDE:{0}]";

        var id = this.viewModel.get("id");

        return template.format(id, id.replace(/-/g, ""), this.getConfigSettingsSerialized())
    }

    // Diese Methode gibt das Standard-ViewModel zurück, welches hauptsächlich für die Darstellung und konfigurierbare Funktionalität des eigentlichen Tabs benötigt wird.
    // Hier werden außerdem die Attribute fuer das Diagramm festgelegt.
    getDefaultViewModel(): any {
        var getCustomTitle = this.getCustomTitle.bind(this);
        var self = this;

        return kendo.observable({
            defaultTitle: function () {
                return "Charts";
            },
            title: function () {
                var customTitle: string = this.get("customTitle");
                if (customTitle) {
                    return getCustomTitle(customTitle);
                }
                else {
                    var defaultTitle: any = this.get("defaultTitle");
                    if (defaultTitle) {
                        return typeof (defaultTitle) === "function" ? defaultTitle.call(this) : defaultTitle;
                    }
                    else {
                        return "";
                    }
                }
            },
            customTitle: "",
            id: this.id,
            index: -1,
            opacity: 1,
            editMode: false,
            hidden: this.hidden,
            selectedChart: "area",
            selectedTheme: "Bootstrap",
            isChartVisible: function(current) {
                var selectedChart = this.get("selectedChart");
                return selectedChart === current;
            },

            defaultChartName: "Übersicht",
            customChartName: "",

            chartDataSource: null,

            defaultHeigth: "250px",
            customHeigth: "",

            dataSourceUrl: "",
            
            // Die folgenden 5 Werte koennen von der Konfiguration dazu benutzt werden, um Werte zu speichern.
            // Diese Werte werden dann von dem Diagramm geladen.
            chartValue1: "",
            chartValue2: "",
            chartValue3: "",
            chartValue4: "",
            chartValue5: ""
        });
    }

    // In dieser Methode wird ein Diagramm zurueckgegeben, welches laut Konfiguration geladen werden soll.
    private getChart(chartType: string): Chart {
        var html: string;

        var chartValue1 = this.viewModel.get("chartValue1");
        var chartValue2 = this.viewModel.get("chartValue2");
        var chartValue3 = this.viewModel.get("chartValue3");
        var chartValue4 = this.viewModel.get("chartValue4");
        var chartValue5 = this.viewModel.get("chartValue5");

        switch(chartType.toLowerCase()){
            case "area":
                return new AreaChart(chartValue1, chartValue2);
            case "bar":
                return new BarChart(chartValue1, chartValue2);
            case "bubble":
                return new BubbleChart(chartValue1, chartValue2, chartValue3);
            case "bullet":
                return new BulletChart(chartValue1, chartValue2);
            case "donut":
                return new DonutChart(chartValue1);
            case "funnel":
                return new FunnelChart(chartValue1);
            case "line":
                return new LineChart(chartValue1, chartValue2);
            case "pie":
                return new PieChart(chartValue1);
            case "polar":
                return new PolarChart(chartValue1, chartValue2);
            case "radar":
                return new RadarChart(chartValue1, chartValue2);
            case "scatter":
                return new ScatterChart(chartValue1, chartValue2, chartValue3);
            default:
                return null;
        }
    }

    // In dieser Methode wird die Konfiguration zurueckgegeben. Jede Konfiguration eines Diagrammtyps muss hier registriert werden.
    private getChartConfiguration(): ChartConfiguration {
        var config = new ChartConfiguration();

        config.push(new AreaChartConfiguration());
        config.push(new BarChartConfiguration());
        config.push(new BubbleChartConfiguration());
        config.push(new BulletChartConfiguration());
        config.push(new DonutChartConfiguration());
        config.push(new FunnelChartConfiguration());
        config.push(new LineChartConfiguration());
        config.push(new PieChartConfiguration());
        config.push(new PolarChartConfiguration());
        config.push(new RadarChartConfiguration());
        config.push(new ScatterChartConfiguration());

        return config;
    }

    // Diese Methode wird automatisch aufgerufen, um das ViewModel zurueckzugeben, welches nur fuer die Konfiguration relevant ist.
    getEditViewModel(): JQueryDeferred<any> {
        var self = this;
        var enabled = this.editEnabled && !this.isInSuper,
            minimalEnabled = this.editEnabled || this.isInSuper;

        return $.Deferred().resolve($.extend(true, this.viewModel, kendo.observable({
            enabled: function () { return enabled; },
            minimalEnabled: function () { return minimalEnabled; },
            editMode: true,
            charts: self.charts,
            chartThemes: self.chartThemes,
            onChartChange: () => {
                
            },
            dataSourceUrlFormatted: function(value) {
                var url = this.get("dataSourceUrl"),
                    value = value || url,
                    formattedUrl = value.replace(/"/g, "'");
                    
                this.set("dataSourceUrl", formattedUrl);
                return value;
            }
        })));
    }

    // In dieser muessen alle Werte aus dem ViewModel, welche nicht gespeichert werden sollen, wieder auf undefined gesetzt werden.
    public getConfigSettings(): any {
        var copy: any = super.getConfigSettings();
        copy.editMode = undefined;
        copy.guid = undefined;
        copy.enabled = undefined;
        copy.minimalEnabled = undefined;
        copy.hidden = undefined;
        copy.opacity = undefined;
        copy.defaultTitle = undefined;

        copy.charts = undefined;
        copy.chartDataSource = undefined;

        copy.dataSourceUrl = copy.dataSourceUrl.replace(/'/g, "\\\"");

        return copy;
    }
}


// Vater-Klasse fuer jedes Diagramm. Hier sind Werte enhalten, welche fuer alle Typen gleich sind.
// Z.B. gibt es hier die Vorlage fuer das HTML jedes Diagramms.
abstract class Chart {

    protected type: string;
    protected title: string = "Chart";
    protected height: string = "150px";
    protected theme: string = "Bootstrap";

    private series: string = "";
    private extras: Array<string> = new Array<string>();
    
    protected abstract get_Series(): string;
    protected abstract get_Extras(): Array<string>;

    private htmlTemplate: string = `
    <div id="chartContainer">
        <div data-role="chart"
            data-title="{ text: '{title}', position: 'top' }"
            data-theme="{theme}",
            data-series-defaults="{ type: '{type}' }"
            data-series="[
                {series}
            ]"
            {extras}
            data-bind="source: chartDataSource"
            style="height: {height}">
        </div>
    </div>`;

    constructor(type: string) {
        this.type = type;
    }

    private doesStringEndsWithNumber(str: string): boolean {
        if(str.endsWith("0") || 
            str.endsWith("1") || 
            str.endsWith("2") || 
            str.endsWith("3") || 
            str.endsWith("4") || 
            str.endsWith("5") || 
            str.endsWith("6") || 
            str.endsWith("7") || 
            str.endsWith("8") || 
            str.endsWith("9")){
            return true;
        }
        return false;
    }

    public get_Html(): string {
        this.series = this.get_Series();
        this.extras = this.get_Extras();
        var retHtml =  this.htmlTemplate
            .replace("{title}", this.title)
            .replace("{series}", this.series)
            .replace("{type}", this.type)
            .replace("{height}", this.height)
            .replace("{theme}", this.theme);
        
        var extraString = "";
        this.extras.forEach(extra => {
            extraString += extra;
        });
        retHtml = retHtml.replace("{extras}", extraString);

        return retHtml;
    }

    public set_title(title: string): void {
        this.title = title;
    }

    public set_height(cssHeight: string){
        this.height = cssHeight;
        if(this.doesStringEndsWithNumber(cssHeight)){
            this.height = cssHeight + "px";
        }
    }

    public set_theme(theme: string): void {
        this.theme = theme;
    }
}

// Ab hier folgen alle Diagramm Typen. 
// Im Konstruktor wird der Kendo-Diagramm-Typ uebergeben.
// In der Methode get_Series wird das Kendo-Series HTML zurueckgegeben. Hier ist definiert, wie der DataSource aus dem ViewModel auf das Diagramm abgebildet wird.
// In der Methode get_Extras werden Diagramm-Spezifische Attribute zurueckgegeben. Das ist beispielsweise die Beschriftung der Werte auf der x-Achse, was z.B. fuer ein 
// Kreis-Diagramm keinen Sinn ergibt, da es hier keine x-Achse gibt.
class AreaChart extends Chart {
    constructor(public fieldName: string, public axisCategoryField: string){
        super("area");
    }

    protected get_Series(): string {
        return `
        { 
            field: '${this.fieldName}' 
        }`;
    }

    protected get_Extras(): Array<string> {
        var extras = new Array<string>();
        extras.push(`data-category-axis="{ field: '${this.axisCategoryField}' }"`);

        return extras;
    }
}

class BarChart extends Chart {
    constructor(public fieldName: string, public axisCategoryField: string){
        super("column");
    }

    protected get_Series(): string {
        return `
        { 
            field: '${this.fieldName}' 
        }`;
    }

    protected get_Extras(): Array<string> {
        var extras = new Array<string>();
        extras.push(`data-category-axis="{ field: '${this.axisCategoryField}' }"`);

        return extras;
    }
}

class BubbleChart extends Chart {
    constructor(public xFieldName: string, public yFieldName: string, public sizeField: string) {
        super("bubble");
    }

    protected get_Series(): string{
        return `
        { 
            xField: '${this.xFieldName}',
            yField: '${this.yFieldName}',
            sizeField: '${this.sizeField}'
        }`;
    }

    protected get_Extras(): Array<string> {
        return new Array<string>();
    }
}

class BulletChart extends Chart {
    
    gap: number;
    border: number;
    targetColor: string;

    constructor(public currentField: string, public targetField: string){
        super("verticalBullet");

        this.gap = 4;
        this.border = 0;
        this.targetColor = '#aaaaaa';
    }

    protected get_Series(): string{
        return `
        { 
            currentField: '${this.currentField}',
            targetField: '${this.targetField}',
            target: {
                color: '${this.targetColor}'
            },
            gap: ${this.gap},
            border: ${this.border}
        }`;
    }

    protected get_Extras(): Array<string> {
        return new Array<string>();
    }
}

class DonutChart extends Chart {
    
    padding: number;

    constructor(public field: string){
        super("donut");
        this.padding = 10;
    }

    protected get_Series(): string{
        return `
        {
            field: '${this.field}',
            padding: ${this.padding}
        }`;
    }

    protected get_Extras(): Array<string> {
        return new Array<string>();
    }
}

class FunnelChart extends Chart {
    
    padding: number;

    constructor(public field: string){
        super("funnel");
        this.padding = 10;
    }

    protected get_Series(): string{
        return `
        {
            field: '${this.field}',
            padding: ${this.padding}
        }`;
    }

    protected get_Extras(): Array<string> {
        return new Array<string>();
    }
}

class LineChart extends Chart {
    constructor(public fieldName: string, public axisCategoryField: string){
        super("line");
    }

    protected get_Series(): string {
        return `
        { 
            field: '${this.fieldName}' 
        }`;
    }

    protected get_Extras(): Array<string> {
        var extras = new Array<string>();
        extras.push(`data-category-axis="{ field: '${this.axisCategoryField}' }"`);

        return extras;
    }
}

class PieChart extends Chart {
    constructor(public fieldName: string){
        super("pie");
    }

    protected get_Series(): string {
        return `
        { 
            field: '${this.fieldName}' 
        }`;
    }

    protected get_Extras(): Array<string> {
        return new Array<string>();
    }
}

class PolarChart extends Chart {
    constructor(public xField: string, public yField: string){
        super("polarLine");
    }

    protected get_Series(): string {
        return `
        { 
            xField: '${this.xField}',
            yField: '${this.yField}'
        }`;
    }

    protected get_Extras(): Array<string> {
        return new Array<string>();
    }
}

class RadarChart extends Chart {
    constructor(public fieldName: string, public axisCategoryField: string){
        super("radarLine");
    }

    protected get_Series(): string {
        return `
        { 
            field: '${this.fieldName}' 
        }`;
    }

    protected get_Extras(): Array<string> {
        var extras = new Array<string>();
        extras.push(`data-category-axis="{ field: '${this.axisCategoryField}' }"`);

        return extras;
    }
}

class ScatterChart extends Chart {
    constructor(public xFieldName: string, public yFieldName: string, public axisCategoryField: string){
        super("scatter");
    }

    protected get_Series(): string {
        return `
        { 
            xField: '${this.xFieldName}',
            yField: '${this.yFieldName}'
        }`;
    }

    protected get_Extras(): Array<string> {
        var extras = new Array<string>();
        extras.push(`data-category-axis="{ field: '${this.axisCategoryField}' }"`);

        return extras;
    }
}

// Ab hier folgen die Klassen, welche fuer die Konfiguration relevant sind.
// Die Klasse ChartConfiguration beinhaltet das Grundgeruest der einzelnen Diagramm-Konfigurationen.
// Jede Konfiguration muss ueber die Methode push registriert werden.
class ChartConfiguration {

    private chartConfigurations: Array<ChartConfigurationBase>;

    constructor(){
        this.chartConfigurations = new Array<ChartConfigurationBase>();
    }

    private htmlTemplate: string = `
    <script id="elementTabsDiagramm-Template" type="text/x-kendo-template">
        <div class="templateConfigurator" style="width: 100%; min-width: 600px">
            <div style="min-height: 300px; width: 100%">
                <h2 style="margin-top: 8px; margin-left: 20px">Einstellungen für den Tab</h2>
                <table style="width: 97%; margin: 10px 0px 10px 0px;">
                    <tr class="formItem display">
                        <td class="name">
                            <span class="displayName">Name des Tabs</span>
                            <div class="description">Beschreibung des Tabs</div>
                        </td>
                        <td class="value">
                            <input type="text" data-bind="enabled: minimalEnabled, value: customTitle, attr: { placeholder: title }" />
                        </td>
                    </tr>
                    <tr class="formItem display">
                        <td class="name">
                            <span class="displayName">Diagramm Typ</span>
                            <div class="description">Art des Diagramms</div>
                        </td>
                        <td class="value">
                            <input data-role="dropdownlist"
                                data-text-field="chartTitle"
                                data-value-field="chartType"
                                data-bind="value: selectedChart, 
                                    events: { change: onChartChange },
                                    source: charts"
                                style="width: 100%" />
                        </td>
                    </tr>
                    <tr class="formItem display">
                        <td class="name">
                            <span class="displayName">Diagramm Stil</span>
                            <div class="description">Farbschema des Diagramms</div>
                        </td>
                        <td class="value">
                            <input data-role="dropdownlist"
                                data-text-field="themeTitle"
                                data-value-field="themeType"
                                data-bind="value: selectedTheme,
                                    source: chartThemes"
                                style="width: 100%" />
                        </td>
                    </tr>
                    <tr class="formItem display">
                        <td class="name">
                            <span class="displayName">Diagramm Name</span>
                            <div class="description">Beschreibung des Diagramms</div>
                        </td>
                        <td class="value">
                            <input type="text" 
                                data-bind="value: customChartName, attr: { placeholder: defaultChartName }"
                                style="width: 97%" />
                        </td>
                    </tr>
                    <tr class="formItem display">
                        <td class="name">
                            <span class="displayName">Diagramm Höhe</span>
                            <div class="description">CSS-Höhe des Diagramms</div>
                        </td>
                        <td class="value">
                            <input type="text" 
                                data-bind="value: customHeigth, attr: { placeholder: defaultHeigth }"
                                style="width: 97%" />
                        </td>
                    </tr>
                    <tr class="formItem display">
                        <td class="name">
                            <span class="displayName">Datenquelle</span>
                            <div class="description">Url des OData-Webservices</div>
                        </td>
                        <td class="value">
                            <input type="text"
                                data-bind="value: dataSourceUrlFormatted"
                                style="width: 97%" />
                        </td>
                    </tr>
                    {extraRows}
                </table>
            </div>
        </div>
    </script>`;

    public push(chartConfig: ChartConfigurationBase) {
        this.chartConfigurations.push(chartConfig);
    }

    public getHtml(): string {
        var rowsHtml = "";
        this.chartConfigurations.forEach(chartConfig => {
            rowsHtml += chartConfig.getRowsHtml().join("");
        });

        return this.htmlTemplate.replace("{extraRows}", rowsHtml);
    }
}

// Die Klasse ChartConfigurationBase ist die Vater-Klasse fuer alle Konfigurationsklassen.
// Die Methode getRowHtml gibt das HTML fuer eine Reihe innerhalb der Konfiguration zurueck.
// In der Methode getRowsHtml gibt jede Konfiguration alle diagrammspezifischen Reihen vom HTML zurueck
abstract class ChartConfigurationBase {
    
    constructor(protected type: string){

    }

    private rowTemplate: string = `
    <tr class="formItem display" data-bind="visible: isChartVisible('{type}')">
        <td class="name">
            <span class="displayName">{name}</span>
            <div class="description">{value}</div>
        </td>
        <td class="value">
            {htmlItem}
        </td>
    </tr>`;

    protected getRowHtml(name: string, value: string, htmlItem: string){
        return this.rowTemplate
            .replace("{name}", name)
            .replace("{value}", value)
            .replace("{htmlItem}", htmlItem)
            .replace("{type}", this.type);
    }

    public abstract getRowsHtml(): Array<string>;
}

class AreaChartConfiguration extends ChartConfigurationBase {

    constructor() {
        super('area');
    }

    public getRowsHtml(): Array<string> {
        var rows = new Array<string>();
        rows.push(this.getRowHtml("y-Wert", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue1" style="width: 97%" />`));
        rows.push(this.getRowHtml("Kategorie", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue2" style="width: 97%" />`));

        return rows;
    }
}

class BarChartConfiguration extends ChartConfigurationBase {

    constructor() {
        super('bar');
    }

    public getRowsHtml(): Array<string> {
        var rows = new Array<string>();
        rows.push(this.getRowHtml("y-Wert", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue1" style="width: 97%" />`));
        rows.push(this.getRowHtml("Kategorie", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue2" style="width: 97%" />`));

        return rows;
    }
}

class BubbleChartConfiguration extends ChartConfigurationBase {

    constructor() {
        super('bubble');
    }

    public getRowsHtml(): Array<string> {
        var rows = new Array<string>();
        rows.push(this.getRowHtml("x-Wert", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue1" style="width: 97%" />`));
        rows.push(this.getRowHtml("y-Wert", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue2" style="width: 97%" />`));
        rows.push(this.getRowHtml("Durchmesser-Wert", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue3" style="width: 97%" />`));

        return rows;
    }
}

class BulletChartConfiguration extends ChartConfigurationBase {

    constructor() {
        super('bullet');
    }

    public getRowsHtml(): Array<string> {
        var rows = new Array<string>();
        rows.push(this.getRowHtml("Wert", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue1" style="width: 97%" />`));
        rows.push(this.getRowHtml("Ziel Wert", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue2" style="width: 97%" />`));

        return rows;
    }
}

class DonutChartConfiguration extends ChartConfigurationBase {

    constructor() {
        super('donut');
    }

    public getRowsHtml(): Array<string> {
        var rows = new Array<string>();
        rows.push(this.getRowHtml("Wert", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue1" style="width: 97%" />`));

        return rows;
    }
}

class FunnelChartConfiguration extends ChartConfigurationBase {

    constructor() {
        super('funnel');
    }

    public getRowsHtml(): Array<string> {
        var rows = new Array<string>();
        rows.push(this.getRowHtml("Wert", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue1" style="width: 97%" />`));

        return rows;
    }
}

class LineChartConfiguration extends ChartConfigurationBase {

    constructor() {
        super('line');
    }

    public getRowsHtml(): Array<string> {
        var rows = new Array<string>();
        rows.push(this.getRowHtml("y-Wert", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue1" style="width: 97%" />`));
        rows.push(this.getRowHtml("Kategorie", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue2" style="width: 97%" />`));

        return rows;
    }
}

class PieChartConfiguration extends ChartConfigurationBase {

    constructor() {
        super('pie');
    }

    public getRowsHtml(): Array<string> {
        var rows = new Array<string>();
        rows.push(this.getRowHtml("Wert", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue1" style="width: 97%" />`));

        return rows;
    }
}

class PolarChartConfiguration extends ChartConfigurationBase {

    constructor() {
        super('polar');
    }

    public getRowsHtml(): Array<string> {
        var rows = new Array<string>();
        rows.push(this.getRowHtml("x-Wert", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue1" style="width: 97%" />`));
        rows.push(this.getRowHtml("y-Wert", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue2" style="width: 97%" />`));

        return rows;
    }
}

class RadarChartConfiguration extends ChartConfigurationBase {

    constructor() {
        super('radar');
    }

    public getRowsHtml(): Array<string> {
        var rows = new Array<string>();
        rows.push(this.getRowHtml("Wert", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue1" style="width: 97%" />`));
        rows.push(this.getRowHtml("Kategorie", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue2" style="width: 97%" />`));

        return rows;
    }
}

class ScatterChartConfiguration extends ChartConfigurationBase {

    constructor() {
        super('scatter');
    }

    public getRowsHtml(): Array<string> {
        var rows = new Array<string>();
        rows.push(this.getRowHtml("x-Wert", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue1" style="width: 97%" />`));
        rows.push(this.getRowHtml("y-Wert", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue2" style="width: 97%" />`));
        rows.push(this.getRowHtml("Kategorie", 
            "Interner Feldname", 
            `<input type="text" data-bind="value: chartValue3" style="width: 97%" />`));

        return rows;
    }
}

// Diese Klasse dient als Hilfe, um Daten von einem OData-Webservice zu laden.
class ODataHelper {
    public static get(url: string) : JQueryPromise<any> {
        var dfd = $.Deferred();

        $.ajax({
            url: url,
            type: "GET",
            headers: {
                "accept": "application/json;odata=verbose",
            },
            success: function(data){
                dfd.resolve(data.d.results);
            },
            error: function(error){
                dfd.reject(error);
            }
        });

        return dfd.promise();
    }

    public static getListByTitle(title: string): JQueryPromise<any> {
        return this.get(_spPageContextInfo.webServerRelativeUrl + `/_api/web/lists/GetByTitle('${title}')/items`);
    }
}


//# sourceURL=tabODataDigramm.js