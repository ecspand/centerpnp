/// <reference path="../typings/ecspand/center.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />

class Element_tabsTestDefault extends ecspand.Templates.ElementBase {

    templateID = "elementTabsTestDefault-Template";
    tabStrip: ecspand.Controls.TabStrip = null;

    private charts = [{
            chartTitle: "Area",
            chartID: "area"
        },{
            chartTitle: "Bar",
            chartID: "bar"
        },{
            chartTitle: "Bubble",
            chartID: "bubble"
        },{
            chartTitle: "Bullet",
            chartID: "bullet"
        },{
            chartTitle: "Donut",
            chartID: "donut"
        },{
            chartTitle: "Funnel",
            chartID: "funnel"
        },{
            chartTitle: "Line",
            chartID: "line"
        },{
            chartTitle: "Pie",
            chartID: "pie"
        },{
            chartTitle: "Polar",
            chartID: "polar"
        },{
            chartTitle: "Radar",
            chartID: "radar"
        },{
            chartTitle: "Scatter",
            chartID: "scatter"
        }];

    constructor(template: ecspand.Templates.TemplateBase, vm: any, tabStrip: ecspand.Controls.TabStrip, options?: ecspand.Templates.ElementBaseOptions) {
        super(template, vm, options);
        this.tabStrip = tabStrip;

        $(document.body).append(
            `<script id="elementTabsTestDefault-Template" type="text/x-kendo-template">
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
                                        data-value-field="chartID"
                                        data-bind="value: selectedChart, source: charts"
                                        style="width: 100%" />
                                </td>
                            </tr>
                            <tr class="formItem display">
                                <td class="name">
                                    <span class="displayName">Datenquelle</span>
                                    <div class="description">Url des Webservices</div>
                                </td>
                                <td class="value">
                                    <input type="text" 
                                        style="width: 97%" />
                                </td>
                            </tr>
                            <tr class="formItem display">
                                <td class="name">
                                    <span class="displayName">x-Wert</span>
                                    <div class="description">Wert der x-Achse</div>
                                </td>
                                <td class="value">
                                    <input type="text" 
                                        style="width: 97%" />
                                </td>
                            </tr>
                            <tr class="formItem display">
                                <td class="name">
                                    <span class="displayName">y-Wert</span>
                                    <div class="description">Wert der y-Achse</div>
                                </td>
                                <td class="value">
                                    <input type="text" 
                                        style="width: 97%" />
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </script>`);
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

    onContentLoaded(args: any) : void {
        var container = $(args.contentElement);

        var content = $(this.getChartHtml("bar"));
        $.getScript("/_layouts/15/Scripts/kendo.dataviz.js", () => {
            ecspand.Helper.UI.registerCSSFile("/_layouts/15/Scripts/dataviz/kendo.dataviz.material.css");
            container.append(content);
            kendo.bind(container, kendo.observable(this.viewModel));
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
            "btn = new Element_tabsTestDefault(elmselftemp, JSON.parse(settings), elmselftemp.tabStrip, elmselftemp.{1}Options || {});\n" +
            "elmselftemp.deferreds.push(btn.init());\n" +
            "// [EDE:{0}]";

        var id = this.viewModel.get("id");

        return template.format(id, id.replace(/-/g, ""), this.getConfigSettingsSerialized())
    }

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
            selectedChart: "bar",
            charts: self.charts,
            bubbleChartDataSource: [{
                x: 100, 
                y: 100,
                size: 1000,
                category: "Demo title 1"
            },
            {
                x: 600,
                y: 400,
                size: 10000,
                category: "Demo title 2"
            }],
            xyChartDataSource: [{
                x: 500,
                y: 600
            },{
                x: 200,
                y: 700
            },{
                x: 800,
                y: 550
            },{
                x: 100,
                y: 500
            }],
            xChartDataSource: [{
                x: 100
            }, {
                x: 200
            }, {
                x: 150
            }, {
                x: 200
            }, {
                x: 400
            }, {
                x: 80
            }, {
                x: 120
            }],
            lineChartDataSource: [{
                x: 100,
                year: 2010
            }, {
                x: 200,
                year: 2011
            }, {
                x: 150,
                year: 2012
            }, {
                x: 200,
                year: 2013
            }, {
                x: 400,
                year: 2014
            }, {
                x: 80,
                year: 2015
            }, {
                x: 120,
                year: 2016
            }],
            radarChartDataSource: [{
                x: 100,
                unit: '1'
            }, {
                x: 200,
                unit: '2'
            }, {
                x: 150,
                unit: '3'
            }, {
                x: 200,
                unit: '4'
            }, {
                x: 400,
                unit: '5'
            }, {
                x: 80,
                unit: '6'
            }, {
                x: 120,
                unit: '7'
            }]
        });
    }

    private getChartHtml(chartID: string): Chart {
        var html: string;

        switch(chartID.toLowerCase()){
            case "area":
                return new AreaChart("x");
            case "bar":
                return new BarChart("x");
            case "bubble":
                return new BubbleChart("x", "y", "size");
            case "bullet":
                return new BulletChart("x", "y");
            case "donut":
                return new DonutChart("x");
            case "funnel":
                return new FunnelChart("x");
            case "line":
                return new LineChart("x");
            case "pie":
                return new PieChart("x");
            case "polar":
                return new PolarChart("x", "y");
            case "radar":
                return new RadarChart("x", "unit");
            case "scatter":
                return new ScatterChart("x", "y", "unit");
            default:
                return null;
        }
    }

    getEditViewModel(): JQueryPromise<any> {
        var enabled = this.editEnabled && !this.isInSuper,
            minimalEnabled = this.editEnabled || this.isInSuper;

        return $.Deferred().resolve($.extend(true, this.viewModel, kendo.observable({
            enabled: function () { return enabled; },
            minimalEnabled: function () { return minimalEnabled; },
            editMode: true
        })));
    }

    public getConfigSettings(): any {
        var copy: any = super.getConfigSettings();
        copy.editMode = undefined;
        copy.guid = undefined;
        copy.enabled = undefined;
        copy.minimalEnabled = undefined;
        copy.hidden = undefined;
        copy.opacity = undefined;
        copy.defaultTitle = undefined;

        return copy;
    }
}


//Charts

abstract class Chart {

    protected type: string;
    protected title: string = "Chart";
    protected height: string = "150px";

    private series: string = "";
    private extras: Array<string> = new Array<string>();
    
    protected abstract get_Series(): string;
    protected abstract get_Extras(): Array<string>;

    private htmlTemplate: string = `
    <div>
        <div data-role="chart"
            data-title="{ text: '{title}', position: 'top' }"
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

    public get_Html(): string {
        this.series = this.get_Series();
        this.extras = this.get_Extras();
        var retHtml =  this.htmlTemplate
            .replace("{title}", this.title)
            .replace("{series}", this.series)
            .replace("{type}", this.type)
            .replace("{height}", this.height);
        
        var extraString = "";
        this.extras.forEach(extra => {
            extraString += extra;
        });
        retHtml = retHtml.replace("{extras}", extraString);

        return retHtml;
    }
}

class AreaChart extends Chart {
    constructor(public fieldName: string){
        super("area");
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

class BarChart extends Chart {
    constructor(public fieldName: string){
        super("column");
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
    constructor(public fieldName: string){
        super("line");
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