import React, { useRef, useCallback } from 'react';

interface TodoFormProps {
    onAdd(title:string):void
}

export const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {

    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Enter'){
            onAdd(ref.current!.value);
            ref.current!.value = '';
        }
    }, []);

    
    return (
        <div className="input-field mt2">
            <input 
                ref={ref}
                type="text" 
                id="title" 
                placeholder='Введите название дела' 
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    )
}