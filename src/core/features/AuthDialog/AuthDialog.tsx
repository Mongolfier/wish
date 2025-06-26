'use client';

import { Dialog, DialogClose, DialogContent } from '@/core/shared/ui/Dialog';
import { DialogHeading } from '@/core/shared/ui/Dialog/DialogHeading';

import css from './AuthDialog.module.css';

export interface AuthDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
export const AuthDialog = ({ open, onOpenChange }: AuthDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogClose />
                <DialogHeading>
                    <div style={{ backgroundColor: 'red' }}>
                        <form>
                            <input type="text" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </DialogHeading>
            </DialogContent>
        </Dialog >

    );
};