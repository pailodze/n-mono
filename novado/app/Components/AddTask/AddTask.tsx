import { KeyedMutator } from 'swr';
import styles from './AddTask.module.scss';
import Image from "next/image";
import { useState } from 'react';
import { taskApi } from '@/app/taskApi';


const AddTask = (props: { mutate: KeyedMutator<any> }) => {
    const { createTaskApi } = taskApi
    const [input, setInput] = useState('');

    const onChange = (e) => {
        setInput(e.target.value)
    }

    const addNew = async () => {
        await createTaskApi({
            name: input,
        })
        await props.mutate()
        setInput('')
    } 

    return (
        <div className={styles.container}>
            <input className={styles.input} placeholder='ცხოვრების რა ნაწილის დაგეგმვა გსურს?' onChange={onChange} />
            <button className={styles.button} onClick={addNew}>
                დამატება 
                <Image src={'/plus.svg'} alt='plus' width={16} height={16} />
            </button>
        </div>
    )
}

export default AddTask;