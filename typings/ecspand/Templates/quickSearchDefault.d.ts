declare class Template_quickSearch extends ecspand.Templates.TemplateBase {
    quickSearch: ecspand.Controls.QuickSearch;
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<any>;
    initQuickSearch(): void;
    initComplete(): JQueryPromise<{}>;
    bindEvents(): void;
    destroy(): JQueryPromise<any>;
}
