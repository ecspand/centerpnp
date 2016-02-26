declare class Template_folderContentDocument extends ecspand.Templates.TemplateBase {
    content: JQuery;
    splitter: kendo.ui.Splitter;
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<{}>;
    resize(): void;
    destroy(): JQueryPromise<any>;
}
