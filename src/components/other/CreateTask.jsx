import React from 'react'

const CreateTask = () => {
    return (
        <div className="w-full flex justify-center items-start mt-8">
                <form
                    className="w-[98%] max-w-6xl bg-neutral-900 rounded-xl p-8 flex flex-row gap-8"
                >
                    <div className="w-1/2 flex flex-col gap-6">
                        <div>
                            <h3 className="text-white mb-2">Task Title</h3>
                            <input
                                type="text"
                                placeholder="Make a UI design"
                                className="w-full px-4 py-2 rounded border border-neutral-500 bg-transparent text-white outline-none"
                            />
                        </div>
                        <div>
                            <h3 className="text-white mb-2">Date</h3>
                            <input
                                type="text"
                                placeholder="dd/mm/yyyy"
                                className="w-full px-4 py-2 rounded border border-neutral-500 bg-transparent text-white outline-none"
                            />
                        </div>
                        <div>
                            <h3 className="text-white mb-2">Assign to</h3>
                            <input
                                type="text"
                                placeholder="employee name"
                                className="w-full px-4 py-2 rounded border border-neutral-500 bg-transparent text-white outline-none"
                            />
                        </div>
                        <div>
                            <h3 className="text-white mb-2">Category</h3>
                            <input
                                type="text"
                                placeholder="design, dev, etc"
                                className="w-full px-4 py-2 rounded border border-neutral-500 bg-transparent text-white outline-none"
                            />
                        </div>
                    </div>

                    <div className="w-1/2 flex flex-col justify-start gap-6">
                        <div>
                            <h3 className="text-white mb-2">Description</h3>
                            <textarea
                                className="w-full h-40 px-4 py-2 rounded border border-neutral-500 bg-transparent text-white outline-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-2 py-3 text-lg font-semibold bg-green-500 text-white rounded"
                        >
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
    )
}

export default CreateTask