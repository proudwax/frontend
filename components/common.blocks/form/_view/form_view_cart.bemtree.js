block( 'form' ).mod( 'view', 'cart' ).content()( ( node ) => {
  const cart = node.api.result.cart.object.cart;

  if ( !node.api.result.cart.object.total_count ) {
    return 'Корзина пуста';
  }

  return [
    {
      elem: 'header',
      content: ''
    },
    {
      elem: 'content',
      content: [
        {
          elem: 'section',
          content: Object.keys( cart ).map( key => {
            const tour = cart[key].tour;

            if ( !tour ) {
              return 'Error with tour parsing';
            }

            return {
              block: 'cart',
              content: [
                {
                  block: 'h4',
                  tag: 'h2',
                  content: [
                    'Экскурсия ',
                    {
                      block: 'link',
                      url: tour.uri ? ( tour.uri + '?id=' + tour.id ) : '?',
                      content: tour.longtitle
                    }
                  ]
                },
                {
                  block: 'fieldset',
                  content: {
                    block: 'form-field',
                    id: 'date',
                    name: 'date',
                    mods: {
                      type: 'input',
                      required: true,
                      message: 'text'
                    },
                    content: [{
                        block: 'label',
                        content: 'Выберите дату рейса'
                      },
                      {
                        block: 'input',
                        mods: {
                          'has-calendar': true,
                          width: 'available',
                          type: 'date'
                        },
                        weekdays: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
                        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                        val: '16.02.2017'
                      }
                    ]
                  },
                },
                {
                  block: 'fieldset',
                  content: {
                    block: 'form-field',
                    id: 'direction',
                    name: 'direction',
                    mods: {
                      type: 'select',
                      required: true,
                      message: 'text'
                    },
                    content: [{
                        block: 'label',
                        content: 'Направление'
                      },
                      {
                        block: 'menu',
                        mods: {
                          mode: 'radio',
                          width: 'available',
                        },
                        val: 1,
                        content: [
                          {
                            elem: 'group',
                            title: 'В одну сторону',
                            content: [
                              {
                                elem: 'item',
                                val: 1,
                                content: 'Санкт-Петербург → Петергоф',
                              },
                              {
                                elem: 'item',
                                val: 2,
                                content: 'Петергоф → Санкт-Петербург',
                              },
                            ]
                          },
                          {
                            elem: 'group',
                            title: 'Туда-обратно',
                            content: [
                              {
                                elem: 'item',
                                val: 3,
                                content: 'Санкт-Петербург → Петергоф → Санкт-Петербург',
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                },
                {
                  block: 'fieldset',
                  content: {
                    block: 'form-field',
                    id: 'pier_start',
                    name: 'pier_start',
                    mods: {
                      type: 'select',
                      required: true,
                      message: 'text'
                    },
                    content: [
                      {
                        block: 'label',
                        content: 'Причал отправления'
                      },
                      {
                        block: 'menu',
                        mods: {
                          mode: 'radio',
                          width: 'available',
                        },
                        val: 1,
                        content: [
                          {
                            elem: 'item',
                            val: 1,
                            content: 'Дворцовая набережная',
                          },
                          {
                            elem: 'item',
                            val: 2,
                            content: 'Сенатская пристань',
                          },
                        ]
                      }
                    ]
                  },
                },
                {
                  block: 'fieldset',
                  content: [
                    {
                      block: 'form-field',
                      id: 'time_type',
                      name: 'time_type',
                      mods: {
                        type: 'radio',
                        required: true,
                        message: 'text'
                      },
                      content: [
                        {
                            block: 'radio-group',
                            mods: {
                                type: 'button'
                            },
                            name: 'radio-button',
                            options: [
                                {
                                    val: 1,
                                    text: 'Открытое время'
                                },
                                {
                                    val: 2,
                                    text: 'Фиксированное'
                                },
                            ]
                        },
                      ]
                    },
                    {
                      block: 'paragraph',
                      content: 'Билет будет действовать в течение дня. Начало движения в 10:30, последний отходит в 14:35.'
                    },
                    { tag: 'hr' },
                    {
                      block: 'fieldset',
                      content: {
                        block: 'form-field',
                        id: 'time_start',
                        name: 'time_start',
                        mods: {
                          type: 'select',
                          required: true,
                          message: 'text'
                        },
                        content: [
                          {
                            block: 'label',
                            content: 'Отправление Санкт-Петербург → Петергоф'
                          },
                          {
                            block: 'menu',
                            mods: {
                              mode: 'radio',
                              width: 'available',
                            },
                            val: 1,
                            content: [
                              {
                                elem: 'item',
                                val: 1,
                                content: '14:00 (прибытие в 15:00)',
                              },
                              {
                                elem: 'item',
                                val: 2,
                                content: '15:30 (прибытие в 16:30)',
                              },
                              {
                                elem: 'item',
                                val: 3,
                                content: '17:40 (прибытие в 18:40)',
                              },
                              {
                                elem: 'item',
                                val: 4,
                                content: '18:20 (прибытие в 19:20)',
                              },
                            ]
                          }
                        ]
                      },
                    },
                    {
                      block: 'fieldset',
                      content: {
                        block: 'form-field',
                        id: 'time_finish',
                        name: 'time_finish',
                        mods: {
                          type: 'select',
                          required: true,
                          message: 'text'
                        },
                        content: [
                          {
                            block: 'label',
                            content: 'Отправление Петергоф → Санкт-Петербург'
                          },
                          {
                            block: 'menu',
                            mods: {
                              mode: 'radio',
                              width: 'available',
                            },
                            val: 1,
                            content: [
                              {
                                elem: 'item',
                                val: 1,
                                content: '16:00 (прибытие в 17:00)',
                              },
                              {
                                elem: 'item',
                                val: 2,
                                content: '17:20 (прибытие в 18:20)',
                              },
                              {
                                elem: 'item',
                                val: 3,
                                content: '18:20 (прибытие в 19:20)',
                              },
                              {
                                elem: 'item',
                                val: 4,
                                content: '19:00 (прибытие в 20:00)',
                              },
                            ]
                          }
                        ]
                      },
                    }
                  ]
                },
                {
                  block: 'fieldset',
                  legend: 'Билеты',
                  content: [
                    {
                      block: 'form-field',
                      mods: {
                        type: 'input',
                      },
                      id: 'adult',
                      name: 'ticket[adult]',
                      content: [
                        {
                          block: 'label',
                          content: 'Взрослый'
                        },
                        {
                          block: 'button',
                          text: '-'
                        },
                        {
                          block: 'input',
                          val: 1,
                          placeholder: 0
                        },
                        {
                          block: 'button',
                          text: '+'
                        },
                      ]
                    },
                    {
                      block: 'form-field',
                      mods: {
                        type: 'input',
                      },
                      id: 'child',
                      name: 'ticket[child]',
                      content: [
                        {
                          block: 'label',
                          content: 'Детский'
                        },
                        {
                          block: 'button',
                          text: '-'
                        },
                        {
                          block: 'input',
                          placeholder: 0
                        },
                        {
                          block: 'button',
                          text: '+'
                        },
                      ]
                    },
                    {
                      block: 'form-field',
                      mods: {
                        type: 'input',
                      },
                      id: 'preferential',
                      name: 'ticket[preferential]',
                      content: [
                        {
                          block: 'label',
                          content: 'Льготовый'
                        },
                        {
                          block: 'button',
                          text: '-'
                        },
                        {
                          block: 'input',
                          placeholder: 0
                        },
                        {
                          block: 'button',
                          text: '+'
                        },
                      ]
                    },
                  ]
                },
                {
                  block: 'fieldset',
                  legend: 'Выбор мест',
                  content: {
                    block: 'form-field',
                    mods: {
                      type: 'checkbox-group',
                    },
                    id: 'place',
                    name: 'place',
                    content: [
                      {
                          block : 'checkbox-group',
                          mods: { type: 'button' },
                          options : [
                              { val : 1, text : 1 },
                              { val : 2, text : 2 },
                              { val : 3, text : 3 },
                              { val : 4, text : 4 },
                              { val : 5, text : 5 },
                              { val : 6, text : 6 },
                              { val : 7, text : 7 },
                              { val : 8, text : 8 },
                              { val : 9, text : 9 },
                              { val : 10, text : 10 },
                              { val : 11, text : 11 },
                              { val : 12, text : 12 },
                              { val : 13, text : 13 },
                              { val : 14, text : 14 },
                              { val : 15, text : 15 },
                              { val : 16, text : 16 },
                              { val : 17, text : 17 },
                              { val : 18, text : 18 },
                              { val : 19, text : 19 },
                              { val : 20, text : 20 },
                              { val : 21, text : 21 },
                              { val : 22, text : 22 },
                              { val : 23, text : 23 },
                              { val : 24, text : 24 },
                              { val : 25, text : 25 },
                              { val : 26, text : 26 },
                              { val : 27, text : 27 },
                              { val : 28, text : 28 },
                              { val : 29, text : 29 },
                              { val : 30, text : 30 },
                              { val : 31, text : 31 },
                              { val : 32, text : 32 },
                              { val : 33, text : 33 },
                              { val : 34, text : 34 },
                              { val : 35, text : 35 },
                              { val : 36, text : 36 },
                              { val : 37, text : 37 },
                              { val : 38, text : 38 },
                              { val : 39, text : 39 },
                              { val : 40, text : 40 },
                              { val : 41, text : 41 },
                              { val : 42, text : 42 },
                              { val : 43, text : 43 },
                              { val : 44, text : 44 },
                              { val : 45, text : 45 },
                              { val : 46, text : 46 },
                              { val : 47, text : 47 },
                              { val : 48, text : 48 },
                              { val : 49, text : 49 },
                              { val : 50, text : 50 },
                              { val : 51, text : 51 },
                              { val : 52, text : 52 },
                              { val : 53, text : 53 },
                              { val : 54, text : 54 },
                              { val : 55, text : 55 },
                          ]
                      }
                    ]
                  }
                }
              ]
            };
          } )
        },
        {
          elem: 'section',
          content: [
            {
              block: 'form-field',
              id: 'email',
              name: 'email',
              mods: {
                type: 'input',
                required: true,
                message: 'text'
              },
              content: [
                {
                  block: 'label',
                  content: 'Email'
                },
                {
                  block: 'input',
                  mods: {
                    type: 'email',
                    width: 'available'
                  }
                }
              ]
            },
            {
              block: 'form-field',
              id: 'name',
              name: 'name',
              mods: {
                type: 'input',
                required: true,
                message: 'text'
              },
              content: [
                {
                  block: 'label',
                  content: 'Фамилия и имя'
                },
                {
                  block: 'input',
                  mods: {
                    width: 'available'
                  }
                }
              ]
            },
            {
              block: 'form-field',
              id: 'phone',
              name: 'phone',
              mods: {
                type: 'input',
                required: true,
                message: 'text'
              },
              content: [
                {
                  block: 'label',
                  content: 'Номер мобильного телефона'
                },
                {
                  block: 'input',
                  mods: {
                    type: 'phone',
                    width: 'available'
                  },
                  placeholder: '+7 9×× ×××-××-××'
                }
              ]
            },
            {
              block: 'form-field',
              id: 'payment-type',
              name: 'payment-type',
              mods: {
                type: 'radio-group',
                required: true,
                message: 'text'
              },
              content: [
                {
                  block: 'label',
                  content: 'Вариант оплаты'
                },
                {
                    block: 'radio-group',
                    options: [
                      {
                        val: 1,
                        text: [
                          {
                            block: 'text',
                            mods: { bold: true },
                            content: 'Банковской картой'
                          }
                        ]
                      },
                      {
                        val: 2,
                        text: [
                          'Из кошелька в ',
                          {
                            block: 'text',
                            mods: { bold: true },
                            content: 'Яндекс.Деньгах'
                          }
                        ]
                      },
                      {
                        val: 3,
                        text: [
                          {
                            block: 'text',
                            mods: { bold: true },
                            content: 'Наличными'
                          },
                          ' через Сбербанк, Связной и терминалы'
                        ]
                      }
                    ]
                }
              ]
            },
            {
              block: 'form-field',
              id: 'promocode',
              name: 'promocode',
              mods: {
                type: 'input',
                message: 'text'
              },
              content: [
                {
                  block: 'label',
                  content: 'Промокод (если есть)'
                },
                {
                  block: 'input',
                  mods: {
                    width: 'available'
                  }
                }
              ]
            },
            {
              elem: 'sum',
              mods: { size: 'xl' },
              content: [
                'Итого к оплате: ',
                node.api.result.cart.object.total_cost,
                ' руб.'
              ]
            },
            {
              block: 'form-field',
              id: 'disclaimer',
              name: 'disclaimer',
              mods: {
                type: 'checkbox',
                required: true,
                message: 'text'
              },
              content: [
                {
                  block: 'checkbox',
                  val: 'agree',
                  text: [
                    'Я согласен(на) с ',
                    {
                      block: 'link',
                      url: '/offerta',
                      target: '_blank',
                      title: 'Открыть пользовательское соглашение в новой вкладке',
                      content: 'пользовательским соглашением'
                    },
                    ' и даю своё согласие на обработку моих персональных данных.'
                  ]
                }
              ]
            },
            {
              block: 'button',
              mods: {
                type: 'submit',
                size: 'xl'
              },
              text: 'Перейти к оплате'
            }
          ]
        }
      ]
    },
    {
      elem: 'footer',
      content: [
        {
          block: 'paragraph',
          content: 'Оплата билетов осуществляется через сервис Яндекс.Касса. Это современный и абсолютно безопасный метод. Контактные данные конфиденциальны и используются только для связи по данной прогулке.'
        },
        {
          block: 'paragraph',
          content: 'Вы можете осуществить покупку без комиссии любым удобным вам способом внесения платежа. Обратите внимание, что Выбор оплаты наличными не бронирует для вас места, они будут забронированы только после осуществления оплаты. При оплате наличными через Связной, Евросеть и Сбербанк комиссия 0%.'
        },
        {
          block: 'paragraph',
          content: [
            'Осуществление оплаты означает Ваше согласие ',
            {
              block: 'link',
              url: '/oferta',
              target: '_blank',
              content: 'с правилами покупки билета'
            },
            '. Возврат билетов по инициативе клиентов более, чем за 24 часа - комиссия платежной системы 5% от суммы заказа и 25 рублей за банковский перевод при возврате, менее 24 часов - 50% от стоимости билетов и 25 рублей, менее 12 часов - 100%.'
          ]
        },
        {
          block: 'paragraph',
          content: 'После оплаты нажмите "Вернуться в магазин". Вы будете перенаправлены на страницу с вашим номером билета. Пожалуйста, запишите его. Ваш электронный билет также будет отправлен вам на электронную почту, которую вы укажете на данной странице. По этому билету вы сможете осуществить посадку на теплоход.'
        },
        {
          block: 'paragraph',
          content: 'Если у вас возникли вопросы по покупке билета, пожалуйста, позвоните в нашу круглосуточную службу поддержки и мы обязательно поможем Вам.'
        }
      ]
    }
  ]
} );