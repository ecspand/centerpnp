declare class Template_importantData extends ecspand.Templates.TemplateBase {
    viewModel: any;
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<any>;
    initComplete(): JQueryPromise<any>;
    format(): void;
    destroy(): JQueryPromise<any>;
}
