declare class Template_menuExample extends Template_menu {
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<any>;
    onWfViewModelClick(e: any): void;
    onRefreshViewModelClick(e: any): void;
    findWorkflowInfoByName(startWorkFlowInfos: Array<ecspand.Interfaces.RoAdapter.IWorkflowInfoItem>, workflowName: string): ecspand.Interfaces.RoAdapter.IWorkflowInfoItem;
    resize(): void;
    destroy(): JQueryPromise<any>;
    saveState(): JQueryPromise<any>;
    restoreState(state: any): JQueryPromise<any>;
}
