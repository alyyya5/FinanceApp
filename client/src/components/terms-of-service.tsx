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

export function TermsOfService() {
    const [isChecked, setIsChecked] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 text-sm font-medium whitespace-nowrap"
                >
                    Условия использования
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-2xl p-0">
                <div className="max-h-[90vh] overflow-y-auto p-6">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-gray-900 mb-6">
                            Условия использования сервиса EcoFinance
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-6 text-gray-700">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Общие положения</h2>
                            <p className="mb-4">
                                1.1. Настоящие Условия использования (далее — "Условия") регулируют отношения между пользователем (далее — "Пользователь") и сервисом EcoFinance (далее — "Сервис").
                            </p>
                            <p className="mb-4">
                                1.2. Используя Сервис, Пользователь соглашается с настоящими Условиями в полном объеме.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">2. Описание сервиса</h2>
                            <p className="mb-4">
                                2.1. EcoFinance предоставляет инструменты для учета личных финансов, анализа расходов и доходов, а также экологического следа пользователя.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Обязанности пользователя</h2>
                            <p className="mb-4">
                                3.1. Пользователь обязуется предоставлять достоверную информацию при регистрации и использовании Сервиса.
                            </p>
                            <p className="mb-4">
                                3.2. Пользователь несет ответственность за сохранность своих учетных данных.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Ограничения ответственности</h2>
                            <p className="mb-4">
                                4.1. Сервис не несет ответственности за любые косвенные убытки или упущенную выгоду Пользователя.
                            </p>
                        </section>

                        <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                            <Checkbox
                                id="terms-acceptance"
                                checked={isChecked}
                                onCheckedChange={() => setIsChecked(!isChecked)}
                                className="mt-0 border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                            />
                            <label
                                htmlFor="terms-acceptance"
                                className="text-sm leading-tight text-gray-700"
                            >
                                Я ознакомился и согласен с условиями использования сервиса EcoFinance
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