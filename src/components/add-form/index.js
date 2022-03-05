import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { toast,ToastContainer } from 'react-toastify';
import { categories } from '../../constants/add-expense';
import {addExpense} from  '../../redux/actions/expenses';
import './add-form.css';
import SuccessModal from './success-modal';

const AddForm = () => {
    const catigories = categories;
    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState("");
    const [category,setCategory] = useState();
    const [categoryOpen,setCategoryOpen] = useState(false);
    const [modalOpen,setModalOpen] = useState(false);

    const dispatch = useDispatch();
    
    const handleAmount = (e) => {
        const val = parseFloat(e.target.value);

        if(isNaN(val)){
            setAmount("");
            return ;
        }
        setAmount(val);
    }

    const handleCategory = (cat) => {
        setCategory(cat);
        setCategoryOpen(false);
    }

    const handleSubmit = () => {
        if(title === '' || amount=== '' || category===undefined) {
            const notify = () => toast("Please enter valid data!");
            notify();
            return ;
        }
        const data = {
            title,
            amount,
            category,
            createdAt: new Date()
        };
        dispatch(addExpense(data));
        setModalOpen(true);
    }
    
    return <div className='add-form'>
        <ToastContainer
            position="bottom-left"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
        />
        <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        <div className='form-item'>
            <label>Title</label>
            <input placeholder='Enter Expense Name' value={title} onChange={(e)=>setTitle(e.target.value)}/>    
        </div>
        <div className='form-item'>
            <label>Amount ₹</label>
            <input className='amount-input' placeholder='Enter Amount' value={amount} onChange={(e)=>handleAmount(e)}/>
        </div>
        <div className='category-container-parent'>
            <div className='category'>
                <div className='category-dropdown' onClick={()=>setCategoryOpen(!categoryOpen)}>
                    <label>{category?category.title:'Category'}</label>
                    <i className="fa-solid fa-angle-down"></i>
                </div>
                {
                    categoryOpen&&(
                    <div className='category-container'>
                        {catigories.map(cat => (
                            <div className='category-item' style={{borderRight: `5px solid ${cat.color}`}}key={cat.id} onClick={(e)=>handleCategory(cat)}>
                                <label>{cat.title}</label>
                                <img src={cat.icon} alt={cat.title}/>
                            </div>
                        ))}
                    </div>
                )}    
            </div>    
        </div>
        <div className='form-add-button'>
            <div onClick={handleSubmit}>
                <label>Add</label>
                <i className="fa-solid fa-paper-plane"></i>
            </div>
        </div>
    </div>
};

export default AddForm;