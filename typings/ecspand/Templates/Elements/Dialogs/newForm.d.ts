declare module ecspand.Templates.Elements {
    class DefaultDialog_newForm extends DefaultDialogBase {
        name: string;
        constructor(template: ecspand.Templates.TemplateBase);
        enabled(): JQueryPromise<boolean>;
    }
}
