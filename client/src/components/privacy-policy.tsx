import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from '@/components/ui/dialog';

export function PrivacyPolicy() {
    const [isChecked, setIsChecked] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 text-sm font-medium whitespace-nowrap"
                >
                    Политикой конфиденциальности
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-2xl p-0">
                <div className="max-h-[90vh] overflow-y-auto p-6">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-gray-900 mb-6">
                            Политика конфиденциальности EcoFinance
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-6 text-gray-700">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Общие положения</h2>
                            <p className="mb-4">
                                1.1. Настоящая Политика конфиденциальности (далее — "Политика") определяет порядок обработки персональных данных пользователей сервиса EcoFinance (далее — "Сервис").
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">2. Какие данные мы собираем</h2>
                            <p className="mb-4">
                                2.1. При регистрации мы собираем: имя, фамилию, адрес электронной почты.
                            </p>
                            <p className="mb-4">
                                2.2. В процессе использования Сервиса мы можем собирать данные о ваших финансовых операциях и экологических привычках.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Как мы используем данные</h2>
                            <p className="mb-4">
                                3.1. Данные используются для предоставления функциональности Сервиса, улучшения качества обслуживания и разработки новых функций.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Защита данных</h2>
                            <p className="mb-4">
                                4.1. Мы применяем современные методы шифрования и защиты данных.
                            </p>
                        </section>

                        <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                            <Checkbox
                                id="privacy-acceptance"
                                checked={isChecked}
                                onCheckedChange={() => setIsChecked(!isChecked)}
                                className="mt-0 border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                            />
                            <label
                                htmlFor="privacy-acceptance"
                                className="text-sm leading-tight text-gray-700"
                            >
                                Я ознакомился и согласен с политикой конфиденциальности сервиса EcoFinance
                            </label>
                        </div>

                        <div className="flex justify-end pt-4">
                            <DialogClose asChild>
                                <Button
                                    disabled={!isChecked}
                                    className="premium-button rounded-xl"
                                >
                                    Подтвердить
                                </Button>
                            </DialogClose>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}