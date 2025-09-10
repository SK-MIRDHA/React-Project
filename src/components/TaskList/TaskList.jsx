import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    //console.log(data);
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 w-full py-5 mt-10'>
            {data.tasks.map((elem, idx) => {
                if(elem.active){
                    return <AcceptTask key={idx} data={elem} />
                }
                else if(elem.completed){
                    return <CompleteTask key={idx} data={elem} />
                }
                else if(elem.failed){
                    return <FailedTask key={idx} data={elem} />
                }
                else{
                    return <NewTask task={elem} key={idx} data={elem} />
                }
            })}
        </div>
    )
}

export default TaskList
