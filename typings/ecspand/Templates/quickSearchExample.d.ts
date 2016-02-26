declare class Template_quickSearchExample extends Template_quickSearch {
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<any>;
    initQuickSearch(): void;
}
