declare class Template_tabsDocument extends Template_tabs {
    imageViewer: Template_imageViewer;
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<any>;
    initComplete(): JQueryPromise<any>;
    addImageViewer(): void;
    imageViewerTabContentLoaded(args: ecspand.Controls.TabStripContentLoadedArgs): void;
    destroy(): JQueryPromise<any>;
}
