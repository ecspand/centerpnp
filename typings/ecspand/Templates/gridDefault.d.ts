declare class Template_grid extends ecspand.Templates.TemplateBase {
    grid: ecspand.Controls.SPGrid;
    gridBound: boolean;
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<any>;
    initGrid(): JQueryPromise<any>;
    onGridDataBound(e: any): void;
    onGridSelect(ctx: ecspand.ElementContext, change?: boolean): void;
    gridDataBound(): void;
    private _onGridSelectAndChange(ctx);
    private _showThrobber();
    private _hideThrobber();
    refreshGrid(): void;
    resize(): void;
    createMenu(): JQueryPromise<any>;
    destroy(): JQueryPromise<any>;
}
