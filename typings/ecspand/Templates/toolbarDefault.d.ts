declare class Template_toolbar extends ecspand.Templates.TemplateBase {
    quickSearch: ecspand.Controls.QuickSearch;
    button: JQuery;
    visible: boolean;
    viewModel: {
        items: kendo.data.ObservableArray;
    };
    deferreds: Array<JQueryPromise<any>>;
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<any>;
    initComplete(): JQueryPromise<any>;
    initHistory(index: number): void;
    private _addToHistory(ctx);
    private _getHistory();
    private _createHistoryContent();
    destroy(): JQueryPromise<any>;
}
