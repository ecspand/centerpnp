declare module ecspand.Templates.Config {
    class TemplateConfig_quickSearchDefault extends ecspand.Templates.ConfigBase {
        CLASS_NAME: string;
        templateID: string;
        constructor(template: ecspand.Templates.TemplateBase, vm: any, options?: ecspand.Templates.ElementBaseOptions);
        getConfigSettings(): any;
        getDefaultViewModel(): any;
        getEditViewModel(extend?: any): JQueryPromise<any>;
    }
}
