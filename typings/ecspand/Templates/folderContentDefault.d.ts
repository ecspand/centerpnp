declare class Template_folderContent extends ecspand.Templates.TemplateBase {
    splitter: kendo.ui.Splitter;
    bubbleResize: boolean;
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<{}>;
    resize(): void;
    destroy(): JQueryPromise<any>;
}
