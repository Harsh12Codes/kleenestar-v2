"use client";

import React, { useRef } from "react";
import { Icons } from "@/assets/icons";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { buttonVariants } from "../ui/button";
import { useDeleteBlockNote } from "@/hooks/useDeleteBlocknotes";
import EditBlocknoteDialog from "./EditBlocknoteDialog";

interface BlockNoteTypes {
    id: number;
    image: string;
    created_at: string;
    title: string;
}

interface BlocknoteButtonDropmenuProps {
    blocknote: BlockNoteTypes;
}

export function BlocknoteButtonDropmenu({ blocknote }: BlocknoteButtonDropmenuProps) {
    const { mutate: deleteBlocknote } = useDeleteBlockNote();

    // add a dialog box to edit the selected blocknote

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="!mt-0 rounded-full hover:bg-accent p-2 focus-visible:outline-none">
                <Icons.solarMenuDotsLine className={`h-6 w-6 `} />
            </DropdownMenuTrigger>
            <DropdownMenuContent
                alignOffset={15}
                sideOffset={-5}
                side="right"
                align="start"
                className="w-full max-w-40"
            >
                <EditBlocknoteDialog blocknote={blocknote} />

                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <DropdownMenuItem
                            className="cursor-pointer"
                            onSelect={(e) => e.preventDefault()}
                        >
                            <Icons.solarBinLine className="mr-2 h-4 w-4" />
                            <span className="text-[14px] font-normal text-orange-600">Delete</span>
                        </DropdownMenuItem>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete this
                                blocknote.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deleteBlocknote(blocknote.id);
                                }}
                                className="bg-destructive"
                            >
                                Delete
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
