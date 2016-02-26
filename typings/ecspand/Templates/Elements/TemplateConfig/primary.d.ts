declare module ecspand.Templates.Config {
    class TemplateConfig_primaryDefault extends ecspand.Templates.ConfigBase {
        CLASS_NAME: string;
        templateID: string;
        constructor(template: ecspand.Templates.TemplateBase, vm: any, options?: ecspand.Templates.ElementBaseOptions);
        getConfigSettings(): any;
        getEditViewModel(): JQueryPromise<any>;
    }
}
