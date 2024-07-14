'use client';
import { useEffect } from 'react';
import React from 'react';
import MainLayout from '@/components/MainLayout';
import Accordion from 'react-bootstrap/Accordion';
import Style from '@styles/appStyles/Question.module.scss';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Question() {
    return (
        <MainLayout>
            <div className={Style.container}>
                <h2 className={Style.contentTtl}>よくある質問</h2>

                <Accordion defaultActiveKey="0">
                    <div className={Style.body}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Q サービスの予約方法を教えてください</Accordion.Header>
                            <Accordion.Body className={Style.text}>
                                サービスの予約は公式アカウントから行えます。
                                <br />
                                公式LINEアカウントを友達追加していただきメッセージで希望のプランと必要な情報をお送りください。予約完了後、確認メッセージをお送りします
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className={Style.body}>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Q 支払い方法はどのようなものがありますか？</Accordion.Header>
                            <Accordion.Body className={Style.text}>
                                サービスの予約は公式アカウントから行えます。
                                <br />
                                公式LINEアカウントを友達追加していただきメッセージで希望のプランと必要な情報をお送りください。予約完了後、確認メッセージをお送りします
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className={Style.body}>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Q キャンセルポリシーを教えてください</Accordion.Header>
                            <Accordion.Body className={Style.text}>
                                サービスの予約は公式アカウントから行えます。
                                <br />
                                公式LINEアカウントを友達追加していただきメッセージで希望のプランと必要な情報をお送りください。予約完了後、確認メッセージをお送りします
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className={Style.body}>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Q 子供や高齢者でも参加できますか？</Accordion.Header>
                            <Accordion.Body className={Style.text}>
                                サービスの予約は公式アカウントから行えます。
                                <br />
                                公式LINEアカウントを友達追加していただきメッセージで希望のプランと必要な情報をお送りください。予約完了後、確認メッセージをお送りします
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className={Style.body}>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Q 旅行保険は含まれていますか</Accordion.Header>
                            <Accordion.Body className={Style.text}>
                                サービスの予約は公式アカウントから行えます。
                                <br />
                                公式LINEアカウントを友達追加していただきメッセージで希望のプランと必要な情報をお送りください。予約完了後、確認メッセージをお送りします
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className={Style.body}>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Q 集合場所までのアクセス方法を教えてください</Accordion.Header>
                            <Accordion.Body className={Style.text}>
                                サービスの予約は公式アカウントから行えます。
                                <br />
                                公式LINEアカウントを友達追加していただきメッセージで希望のプランと必要な情報をお送りください。予約完了後、確認メッセージをお送りします
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className={Style.body}>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Q 予約内容の変更は可能ですか？</Accordion.Header>
                            <Accordion.Body className={Style.text}>
                                サービスの予約は公式アカウントから行えます。
                                <br />
                                公式LINEアカウントを友達追加していただきメッセージで希望のプランと必要な情報をお送りください。予約完了後、確認メッセージをお送りします
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className={Style.body}>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Q グループでの参加は可能ですか？</Accordion.Header>
                            <Accordion.Body className={Style.text}>
                                サービスの予約は公式アカウントから行えます。
                                <br />
                                公式LINEアカウントを友達追加していただきメッセージで希望のプランと必要な情報をお送りください。予約完了後、確認メッセージをお送りします
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className={Style.body}>
                        <Accordion.Item eventKey="8">
                            <Accordion.Header>Q ツアーに必要な持ち物はなんですか？</Accordion.Header>
                            <Accordion.Body className={Style.text}>
                                サービスの予約は公式アカウントから行えます。
                                <br />
                                公式LINEアカウントを友達追加していただきメッセージで希望のプランと必要な情報をお送りください。予約完了後、確認メッセージをお送りします
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className={Style.body}>
                        <Accordion.Item eventKey="9">
                            <Accordion.Header>Q ツアー料金に含まれるものは何ですか？</Accordion.Header>
                            <Accordion.Body className={Style.text}>
                                サービスの予約は公式アカウントから行えます。
                                <br />
                                公式LINEアカウントを友達追加していただきメッセージで希望のプランと必要な情報をお送りください。予約完了後、確認メッセージをお送りします
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                </Accordion>
                <div className={Style.inquiry}>
                    <p>
                        上記にない質問やご不明点がある場合は、公式LINEアカウントにてお気軽にお問い合わせください。
                        <br />
                        お客様のご質問に迅速に対応いたします
                    </p>
                    <div className={Style.lineBtn}>
                        <Link href="#">お問い合わせはこちら</Link>
                        <FaExternalLinkAlt color="#fffdf7" />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
