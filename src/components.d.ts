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
        "loader": boolean;
        "text": string;
    }
    interface MarksIntegration {
    }
    interface MarksModal {
        "appearance": string;
        "buttons": string;
        "closeIcon": string;
        "header": string;
        "isopen": boolean;
    }
    interface MarksSpinner {
        "color": any;
        "type": any;
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
export interface MarksModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMarksModalElement;
}
declare global {
    interface HTMLMarksButtonElement extends Components.MarksButton, HTMLStencilElement {
    }
    var HTMLMarksButtonElement: {
        prototype: HTMLMarksButtonElement;
        new (): HTMLMarksButtonElement;
    };
    interface HTMLMarksIntegrationElement extends Components.MarksIntegration, HTMLStencilElement {
    }
    var HTMLMarksIntegrationElement: {
        prototype: HTMLMarksIntegrationElement;
        new (): HTMLMarksIntegrationElement;
    };
    interface HTMLMarksModalElementEventMap {
        "action": any;
    }
    interface HTMLMarksModalElement extends Components.MarksModal, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMarksModalElementEventMap>(type: K, listener: (this: HTMLMarksModalElement, ev: MarksModalCustomEvent<HTMLMarksModalElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMarksModalElementEventMap>(type: K, listener: (this: HTMLMarksModalElement, ev: MarksModalCustomEvent<HTMLMarksModalElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMarksModalElement: {
        prototype: HTMLMarksModalElement;
        new (): HTMLMarksModalElement;
    };
    interface HTMLMarksSpinnerElement extends Components.MarksSpinner, HTMLStencilElement {
    }
    var HTMLMarksSpinnerElement: {
        prototype: HTMLMarksSpinnerElement;
        new (): HTMLMarksSpinnerElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "marks-button": HTMLMarksButtonElement;
        "marks-integration": HTMLMarksIntegrationElement;
        "marks-modal": HTMLMarksModalElement;
        "marks-spinner": HTMLMarksSpinnerElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MarksButton {
        "appearance"?: string;
        "loader"?: boolean;
        "text"?: string;
    }
    interface MarksIntegration {
    }
    interface MarksModal {
        "appearance"?: string;
        "buttons"?: string;
        "closeIcon"?: string;
        "header"?: string;
        "isopen"?: boolean;
        "onAction"?: (event: MarksModalCustomEvent<any>) => void;
    }
    interface MarksSpinner {
        "color"?: any;
        "type"?: any;
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
        "marks-integration": MarksIntegration;
        "marks-modal": MarksModal;
        "marks-spinner": MarksSpinner;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "marks-button": LocalJSX.MarksButton & JSXBase.HTMLAttributes<HTMLMarksButtonElement>;
            "marks-integration": LocalJSX.MarksIntegration & JSXBase.HTMLAttributes<HTMLMarksIntegrationElement>;
            "marks-modal": LocalJSX.MarksModal & JSXBase.HTMLAttributes<HTMLMarksModalElement>;
            "marks-spinner": LocalJSX.MarksSpinner & JSXBase.HTMLAttributes<HTMLMarksSpinnerElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
