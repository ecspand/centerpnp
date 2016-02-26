declare module ecspand.Templates.Elements {
    class DefaultDialog_moreOptions extends DefaultDialogBase {
        CLASS_NAME: string;
        name: string;
        constructor(template: ecspand.Templates.TemplateBase);
        init(): JQueryPromise<any>;
        click(): void;
    }
}
