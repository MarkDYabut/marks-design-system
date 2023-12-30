/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MarksButton {
        "appearance": string;
        "text": string;
    }
    interface MarksModal {
        "closeIcon": string;
        "isopen": boolean;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLMarksButtonElement extends Components.MarksButton, HTMLStencilElement {
    }
    var HTMLMarksButtonElement: {
        prototype: HTMLMarksButtonElement;
        new (): HTMLMarksButtonElement;
    };
    interface HTMLMarksModalElement extends Components.MarksModal, HTMLStencilElement {
    }
    var HTMLMarksModalElement: {
        prototype: HTMLMarksModalElement;
        new (): HTMLMarksModalElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "marks-button": HTMLMarksButtonElement;
        "marks-modal": HTMLMarksModalElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MarksButton {
        "appearance"?: string;
        "text"?: string;
    }
    interface MarksModal {
        "closeIcon"?: string;
        "isopen"?: boolean;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "marks-button": MarksButton;
        "marks-modal": MarksModal;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "marks-button": LocalJSX.MarksButton & JSXBase.HTMLAttributes<HTMLMarksButtonElement>;
            "marks-modal": LocalJSX.MarksModal & JSXBase.HTMLAttributes<HTMLMarksModalElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
