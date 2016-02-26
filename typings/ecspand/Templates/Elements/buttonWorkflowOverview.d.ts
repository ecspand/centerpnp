/// <reference path="buttonBase.d.ts" />
declare module ecspand.Templates.Elements {
    class Element_buttonWorkflowOverviewDefault extends ecspand.Templates.Elements.Element_buttonBase {
        CLASS_NAME: string;
        name: string;
        workflows: ecspand.Controls.Workflows;
        isEnabled(): JQueryPromise<boolean>;
        initInternal(): JQueryPromise<any>;
        getDefaultViewModel(): any;
    }
}
