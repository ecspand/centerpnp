declare module ecspand.Templates.Elements {
    class DefaultDialog_discardCheckOut extends DefaultDialogBase {
        CLASS_NAME: string;
        name: string;
        constructor(template: ecspand.Templates.TemplateBase);
        enabled(): JQueryPromise<boolean>;
        click(): void;
    }
}
