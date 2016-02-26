declare class Template_imageViewer extends ecspand.Templates.TemplateBase {
    extensionWhiteList: Array<any>;
    documentViewer: ecspand.Controls.DocumentViewer;
    timerToken: number;
    viewModel: {
        items: kendo.data.ObservableArray;
    };
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<any>;
    initDocumentViewer(): JQueryPromise<{}>;
    initMenu(): JQueryPromise<any>;
    onViewerSwitchClick(): void;
    getViewerSwitchType(): ecspand.Controls.DocumentViewerType;
    initComplete(): JQueryPromise<any>;
    destroy(): JQueryPromise<any>;
}
