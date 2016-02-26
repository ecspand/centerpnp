declare class Template_primary extends ecspand.Templates.TemplateBase {
    viewModel: any;
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<any>;
    initComplete(): JQueryPromise<{}>;
    destroy(): JQueryPromise<any>;
}
