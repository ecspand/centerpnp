declare module ecspand.Templates.Elements {
    class Element_tabsIFrameDefault extends ecspand.Templates.ElementBase {
        CLASS_NAME: string;
        templateID: string;
        tabStrip: ecspand.Controls.TabStrip;
        name: string;
        constructor(template: ecspand.Templates.TemplateBase, vm: any, tabStrip: ecspand.Controls.TabStrip, options?: ecspand.Templates.ElementBaseOptions);
        init(): JQueryPromise<any>;
        onTabContentLoaded(args: ecspand.Controls.TabStripContentLoadedArgs): void;
        getElementTemplate(): string;
        getDefaultViewModel(): any;
        getEditViewModel(): JQueryPromise<any>;
        getConfigSettings(): any;
    }
}
