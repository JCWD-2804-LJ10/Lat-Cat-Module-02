export interface TodoItemProps{
        todo: {
            id: number;
            text: string;
            completed: boolean;
        };
        onToggle: (id: number) => void;
        onDelete: (id: number) => void;
    }