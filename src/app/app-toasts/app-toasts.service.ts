import { Injectable } from '@angular/core';

@Injectable()
export class AppToastsService {
    toasts: ToastData[] = [];

    show(text: string) {
        this.toasts.push({ text });
    }

    remove(toast: ToastData) {
        const toastIndex = this.toasts.indexOf(toast)
        if (toastIndex !== -1) {
            this.toasts.splice(toastIndex, 1)
        }
    }
}

interface ToastData {
    text: string
}