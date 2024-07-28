'use client';
import { useState, useEffect } from 'react';
import AdminLayout from '../AdminLayout';
import Style from '@styles/appStyles/Admin/TextContent.module.scss';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/esm/Spinner';
import { useCompanyProfile } from '@/hooks/TextContent/useCompanyProfile';

export default function CompanyProfile() {
    const { profile, isLoading, isError } = useCompanyProfile();
    const [formData, setFormData] = useState({
        name: '',
        establishment: '',
        address: '',
        director: '',
        contact: '',
        businessDays: '',
        capital: '',
        qualifications: '',
        memberships: '',
        email: '',
        licenseNumber: '',
    });

    useEffect(() => {
        if (profile && !isLoading && !isError) {
            setFormData({
                name: profile.name || '',
                establishment: profile.establishment || '',
                address: profile.address || '',
                director: profile.director || '',
                contact: profile.contact || '',
                businessDays: profile.businessDays || '',
                capital: profile.capital || '',
                qualifications: profile.qualifications || '',
                memberships: profile.memberships || '',
                email: profile.email || '',
                licenseNumber: profile.licenseNumber || '',
            });
        }
    }, [profile, isLoading, isError]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/text-content/save-company-profile', formData);
            if (response.status === 200) {
                toast.success('情報が保存されました');
            } else {
                toast.error('エラーが発生しました');
            }
        } catch (error) {
            toast.error('エラーが発生しました');
        }
    };

    return (
        <>
            <AdminLayout>
                <div className={Style.TextForm}>
                    <h1 className={Style.title}>会社概要</h1>
                    {isLoading ? (
                        <Spinner animation="border" />
                    ) : (
                        <>
                            <div className={Style.inputItem}>
                                <label>名称：</label>
                                <input name="name" value={formData.name} onChange={handleChange} />
                            </div>
                            <div className={Style.inputItem}>
                                <label>設立：</label>
                                <input name="establishment" value={formData.establishment} onChange={handleChange} />
                            </div>
                            <div className={Style.inputItem}>
                                <label>所在地：</label>
                                <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
                            </div>
                            <div className={Style.inputItem}>
                                <label>取締役：</label>
                                <input name="director" value={formData.director} onChange={handleChange} />
                            </div>
                            <div className={Style.inputItem}>
                                <label>連絡先：</label>
                                <input name="contact" value={formData.contact} onChange={handleChange} />
                            </div>
                            <div className={Style.inputItem}>
                                <label>営業日：</label>
                                <input name="businessDays" value={formData.businessDays} onChange={handleChange} />
                            </div>
                            <div className={Style.inputItem}>
                                <label>資本金：</label>
                                <input name="capital" value={formData.capital} onChange={handleChange} />
                            </div>
                            <div className={Style.inputItem}>
                                <label>資格：</label>
                                <input name="qualifications" value={formData.qualifications} onChange={handleChange} />
                            </div>
                            <div className={Style.inputItem}>
                                <label>加盟団体：</label>
                                <input name="memberships" value={formData.memberships} onChange={handleChange} />
                            </div>
                            <div className={Style.inputItem}>
                                <label>メール：</label>
                                <input name="email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className={Style.inputItem}>
                                <label>国内旅行業務取扱管理者番号：</label>
                                <input name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} />
                            </div>
                            <Button variant="success" className={Style.submitBtn} onClick={handleSubmit}>
                                送信
                            </Button>
                        </>
                    )}
                </div>
            </AdminLayout>
        </>
    );
}
