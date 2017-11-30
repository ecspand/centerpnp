/*
 * Copyright 2015 d.velop AG
 */
/* This template only shows some tabStrip mechanisms. For a basic template description take a look at the fileCoverMenuExample template */
var Template_tabsExample = (function (_super) {
    __extends(Template_tabs_example, _super);
    function Template_tabs_example(ctx, folder, options) {
        var _this = _super.call(this, ctx, folder, options) || this;
        // ---[ELEMENTS-CONFIG-START]---
        _this._extendDerivedConfig({});
        return _this;
        // ---[ELEMENTS-CONFIG-END]---
    }
    /* List of variables and methods you can use:
    Variables and methods, that are available only in the Template_tabs and their derivations:

    - tabStrip: ecspand.Controls.TabStrip - the tabstrip widget/control - it derives from the kendo TabStrip widget and adds some useful
    methods

    */
    Template_tabs_example.prototype.init = function () {
        var _this = this,
            dfd = $.Deferred();

        _super.prototype.init.call(this).done(function () {
            if (!_this.isInitialized) {

                /* This part adds a new tab to the tabStrip widget. The second parameter sets the index for the new tab */
                _this.tabStrip.add({
                    title: "Properties",
                    contentLoaded: _this.onPropertiesContentLoaded.bind(this)
                }, 0);

                // Another example shows how we can add a displayTemplate to a new tab
                _this.tabStrip.add({
                    title: "Custom Template",
                    contentLoaded: this.onCustomContentLoaded.bind(this)
                });

                // Another example shows how we can add the bing search Page to a new tab 
                _this.tabStrip.add({
                    title: "Bing Recherche",
                    contentLoaded: this.onBingSearchContentLoader.bind(this)
                });
            }
        }).fail(dfd.reject);
        return dfd.resolve().promise();
    };


    Template_tabs_example.prototype.onPropertiesContentLoaded = function (args) {

        /* if the content shall only be bound once you have to prove if it is the first load of the tab content */
        if (args.firstLoad) {
            /* This delegate will be called when this tab has been selected, so you can add your contents when they are really needed.
            If you need a throbber because your asynchronous call could take a little longer, you can show it with this.throbber.show() and hide
            it again with this.throbber.hide() */
            /* In this example we show how to open a freely chosen page in an iframe after opening the tab. First, we show up the
            throbber, because the call of an iframe source is an asynchronous process */
            this.throbber.show();
            // In the args object we receive information about the id of the contentElement in which we have to render our content
            var container = $(args.contentElement);
            // Now we create a new iframe element with jQuery and set the source
            var frame = $("<iframe style='height: 100%; width: 100%'>");
            /* To show the display form of the current element, we use the listform page from SharePoint
            http://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.pagetype.Aspx
        
            We can get the parameters that we need from the ctx object of the current instance
            - this.ctx.get_web() - gets us the current SP.Web object http://msdn.microsoft.com/en-us/library/office/jj245288(v=office.15).aspx
            - this.ctx.get_list() - gets us the current SP.List object http://msdn.microsoft.com/en-us/library/office/jj245826(v=office.15).aspx
            - this.ctx.get_listItem() - gets us the current SP.ListItem object http://msdn.microsoft.com/de-de/library/office/jj245356(v=office.15).aspx
            */
            frame.attr("src", this.ctx.get_web().get_url() + "/_layouts/listform.aspx?IsDlg=1&PageType=4" +
                "&ListId=" + this.ctx.get_list().get_id().toString() + "&ID=" + this.ctx.get_listItem().get_id());

            frame.load(function () {
                // After the iframe has been successfully loaded, we can hide the throbber again
                this.throbber.hide();
            });
            // Add the frame to the provided container
            container.append(frame);
        }
    };

    Template_tabs_example.prototype.onCustomContentLoaded = function (args) {

        if (args.firstLoad) {
            this.throbber.show();
            var container = $(args.contentElement);
            var div = $("<div></div>");
            /* Out the current folder object you get access to the template configuration for the current folder type. this.viewType
            is Folder if you are in the folder view or File if you are in the file view. getTemplateConfiguration returns the configuration for a
            template by name. */
            var config = this.folder.getTemplateConfiguration(this.viewType).getTemplateConfiguration("primary");
            /* Here you have to overwrite the default containerSelector with a specific container, like the div defined above */
            config.set_container(div);
            /* In the next step the template will be bound automatically to the given container */
            config.bindTemplate(this.ctx, this.folder).done(function (template) {
                this.throbber.hide();
                /* It is important to destroy the template if it is not needed anymore to prevent memory leaks */
                this.bind("destroy.tabsExample", template.destroy);
            }).fail(function (error) {
                ecspand.Helper.Console.error("Could not load the primary template: " + error.toString());
                this.throbber.hide();
            });
            container.append(div);
        }

    };

    Template_tabs_example.prototype.onBingSearchContentLoader = function (args) {

        if (args.firstLoad) {
            this.throbber.show();
            var container = $(args.contentElement);
            var frame = $("<iframe style='height: 100%; width: 100%'>");
            frame.attr("src", "https://www.bing.com/search?q=" + this.ctx.get_title());
            frame.load(function () {
                this.throbber.hide();
            });
            container.append(frame);
        }

    };

    return Template_tabs_example;
}(Template_tabs));
//# sourceURL=tabsExample.js 
