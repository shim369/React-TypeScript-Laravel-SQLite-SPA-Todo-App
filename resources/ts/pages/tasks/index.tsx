import React, { useEffect } from "react"
import axios from "axios"

const TaskPage: React.VFC = () => {

    const getTasks = async () => {
        const { data } = await axios.get('api/tasks')
        console.log(data);
    }
    useEffect(() => {
        getTasks()
    })

    return (
        <>
            <form className="input-form">
                <div className="inner">
                    <input type="text" className="input" placeholder="TODOを入力してください。" defaultValue="" />
                        <button className="btn is-primary">追加</button>
                </div>
            </form>
            <div className="inner">
                <ul className="task-list">
                    <li>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" />
                        </label>
                        <div><span>新しいTODO</span></div>
                        <button className="btn is-delete">削除</button>
                    </li>
                    <li>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" />
                        </label>
                        <form><input type="text" className="input" defaultValue="編集中のTODO" /></form>
                        <button className="btn">更新</button>
                    </li>
                    <li className="done">
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" />
                        </label>
                        <div><span>実行したTODO</span></div>
                        <button className="btn is-delete">削除</button>
                    </li>
                    <li>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" />
                        </label>
                        <div><span>ゴミ捨て</span></div>
                        <button className="btn is-delete">削除</button>
                    </li>
                    <li>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" />
                        </label>
                        <div><span>掃除</span></div>
                        <button className="btn is-delete">削除</button>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default TaskPage
