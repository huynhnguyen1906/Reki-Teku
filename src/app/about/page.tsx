'use client';
import { useEffect } from 'react';
import React from 'react';
import Style from '@styles/appStyles/About.module.scss';
import Image from 'next/image';
import MainLayout from '@/components/MainLayout';
import { useAboutText } from '@/hooks/TextContent/useAboutText';
import { useCompanyProfile } from '@/hooks/TextContent/useCompanyProfile';
import { formatTextWithLineBreaks } from '@/utils/formatTextWithLineBreaks ';

export default function About() {
    const { text } = useAboutText();
    const { profile } = useCompanyProfile();
    const profileAddress = profile?.address ? formatTextWithLineBreaks(profile.address) : '';
    useEffect(() => {
        const updateBackground = () => {
            if (window.matchMedia('(max-width: 600px)').matches) {
                document.body.style.backgroundImage = 'url(/images/bg-cloud.svg)';
                document.body.style.backgroundSize = 'auto 50%';
            } else {
                document.body.style.backgroundImage = 'url(/images/bg-cloud.svg)';
                document.body.style.backgroundSize = 'cover';
            }
        };

        updateBackground();

        window.addEventListener('resize', updateBackground);

        return () => {
            window.removeEventListener('resize', updateBackground);
            document.body.style.backgroundImage = 'url(/images/bg.svg)';
        };
    }, []);
    return (
        <MainLayout>
            {text && profile ? (
                <div className={Style.companyWrap}>
                    <div className={Style.content}>
                        <h2 className={Style.ttl}>「歴てく」について</h2>
                        <h3>{text.leadText}</h3>
                        <p dangerouslySetInnerHTML={{ __html: formatTextWithLineBreaks(text.mainText) }}></p>
                    </div>
                    <div className={Style.content}>
                        <h2 className={Style.ttl}>「歴てく」の理念</h2>
                        <h3>{text.philosophyLeadText}</h3>
                        <p dangerouslySetInnerHTML={{ __html: formatTextWithLineBreaks(text.philosophyText) }}></p>
                    </div>
                    <div className={Style.content}>
                        <h2 className={Style.ttl_}>ごあいさつ</h2>
                        <div className={Style.flex}>
                            <div className={Style.text}>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: formatTextWithLineBreaks(text.greetingText),
                                    }}
                                ></p>
                            </div>
                            <div className={Style.profile}>
                                <Image src={text.image} alt={text.greetingText} width={300} height={450} priority />
                                <p>代表取締役 吉丸宣孝</p>
                            </div>
                        </div>
                    </div>

                    <div className={Style.aboutWrap}>
                        <h2 className={Style.ttl_}>会社概要</h2>
                        <dl>
                            <div className={Style.about}>
                                <dt>名称</dt>
                                <dd>{profile?.name}</dd>
                            </div>
                        </dl>
                        <dl>
                            <div className={Style.about}>
                                <dt>設立</dt>
                                <dd>{profile?.establishment}</dd>
                            </div>
                        </dl>
                        <dl>
                            <div className={Style.about}>
                                <dt>所在地</dt>
                                <dd dangerouslySetInnerHTML={{ __html: profileAddress }}></dd>
                            </div>
                        </dl>
                        <dl>
                            <div className={Style.about}>
                                <dt>取締役</dt>
                                <dd>{profile?.director}</dd>
                            </div>
                        </dl>
                        <dl>
                            <div className={Style.about}>
                                <dt>連絡先</dt>
                                <dd>{profile?.contact}</dd>
                            </div>
                        </dl>
                        <dl>
                            <div className={Style.about}>
                                <dt>営業日</dt>
                                <dd>{profile?.businessDays}</dd>
                            </div>
                        </dl>
                        <dl>
                            <div className={Style.about}>
                                <dt>資本金</dt>
                                <dd>{profile?.capital}</dd>
                            </div>
                        </dl>
                        <dl>
                            <div className={Style.about}>
                                <dt>資格</dt>
                                <dd>{profile?.qualifications}</dd>
                            </div>
                        </dl>
                        <dl>
                            <div className={Style.about}>
                                <dt>加盟団体</dt>
                                <dd>{profile?.memberships}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            ) : (
                <div className={Style.companyWrap}></div>
            )}
        </MainLayout>
    );
}
