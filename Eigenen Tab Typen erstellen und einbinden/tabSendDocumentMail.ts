/// <reference path="../typings/ecspand/center.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />

class Element_tabsTestDefault extends ecspand.Templates.ElementBase {

    templateID = "elementTabsTestDefault-Template";
    tabStrip: ecspand.Controls.TabStrip = null;

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
                                    <span class="displayName">Url</span>
                                    <div class="description">Aufzurufende Url</div>
                                </td>
                                <td class="value">
                                    <input type="text" data-bind="enabled: minimalEnabled, value: url" />
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

        var content = $(`
        <div>
            <div>Area chart</div>
            <div data-role="chart"
                data-title="{ text: 'x-Achse', position: 'bottom' }"
                data-series-defaults="{ type: 'area' }"
                data-series="[
                    { field: 'x', name: 'Name' }
                ]"
                data-bind="source: areaChartDataSource"
                style="height: 250px">
            </div>
        </div>
        <div>
            <div>Bar chart</div>
            <div data-role="chart"
                data-title="{ text: 'x-Achse', position: 'bottom' }"
                data-series-defaults="{ type: 'column' }"
                data-series="[
                    { field: 'x', name: 'Name' }
                ]"
                data-bind="source: areaChartDataSource"
                style="height: 250px">
            </div>
        </div>
        <div>
            <div>Boxplot chart</chart>
        </div>
        <div>
            <div>Bubble chart</div>
            <div data-role="chart"
                data-title="{ text: 'x-Achse', position: 'bottom' }"
                data-series="[ {
                    type: 'bubble',
                    xField: 'x',
                    yField: 'y',
                    sizeField: 'size',
                    categoryField: 'category'
                }]"
                data-bind="source: bubbleChartDataSource"
                style="height: 250px">
            </div>
        </div>
        <div>
            <div>Bullet chart</div>
            <div data-role="chart"
                data-title="{ text: 'x-Achse', position: 'bottom' }"
                data-series="[{
                    type: 'verticalBullet',
                    currentField: 'y1',
                    targetField: 'y2',
                    target: {
                        color: '#aaaaaa'
                    },
                    gap: 4,
                    border: 0
                }]"
                data-bind="source: bulletChartDataSource"
                style="height: 250px">
            </div>
        </div>
        <div>
            <div>Donut chart</div>
            <div data-role="chart"
                data-title="{ text: 'x-Achse', position: 'bottom' }"
                data-series-defaults="{ type: 'donut'}"
                data-series="[{
                    field: 'x',
                    padding: 10
                }]"
                data-bind="source: donutChartDataSource"
                style="height: 250px">
            </div>
        </div>
        `);
        $.getScript("/_layouts/15/Scripts/kendo.dataviz.js", () => {
            ecspand.Helper.UI.registerCSSFile("/_layouts/15/Scripts/dataviz/kendo.dataviz.css");
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
            areaChartDataSource: [{
                x: 100
            }, {
                x: 200
            }, {
                x: 150
            }, {
                x: 200
            }],
            bulletChartDataSource: [{
                y1: 500,
                y2: 600
            },{
                y1: 200,
                y2: 700
            },{
                y1: 800,
                y2: 550
            },{
                y1: 100,
                y2: 500
            }],
            donutChartDataSource: [{
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
            }]
        });
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