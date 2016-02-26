declare class Template_fileCover extends ecspand.Templates.TemplateBase {
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<any>;
    onEditNewClosed(result: any): void;
}
