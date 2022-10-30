const revenue = {
    "Invoice": [
        {
            "AllowIPNPayment": false,
            "AllowOnlinePayment": false,
            "AllowOnlineCreditCardPayment": true,
            "AllowOnlineACHPayment": true,
            "EInvoiceStatus": "Viewed",
            "domain": "QBO",
            "sparse": false,
            "Id": "476",
            "SyncToken": "0",
            "MetaData": {
                "CreateTime": "2022-08-03T09:00:01-07:00",
                "LastUpdatedTime": "2022-09-03T22:58:35-07:00"
            },
            "CustomField": [],
            "DocNumber": "1008",
            "TxnDate": "2022-08-03",
            "CurrencyRef": {
                "value": "USD",
                "name": "United States Dollar"
            },
            "LinkedTxn": [],
            "Line": [
                {
                    "Id": "1",
                    "LineNum": 1,
                    "Amount": 670,
                    "DetailType": "SalesItemLineDetail",
                    "SalesItemLineDetail": {
                        "ItemRef": {
                            "value": "3",
                            "name": "Hours"
                        },
                        "UnitPrice": 134,
                        "Qty": 5,
                        "ItemAccountRef": {
                            "value": "6",
                            "name": "Sales"
                        },
                        "TaxCodeRef": {
                            "value": "NON"
                        }
                    }
                },
                {
                    "Amount": 670,
                    "DetailType": "SubTotalLineDetail",
                    "SubTotalLineDetail": {}
                }
            ],
            "CustomerRef": {
                "value": "17",
                "name": "FMCA"
            },
            "BillAddr": {
                "Id": "10",
                "Line1": "FMCA"
            },
            "SalesTermRef": {
                "value": "4",
                "name": "Net 30"
            },
            "DueDate": "2022-09-02",
            "TotalAmt": 670,
            "ApplyTaxAfterDiscount": false,
            "PrintStatus": "NotSet",
            "EmailStatus": "EmailSent",
            "BillEmail": {
                "Address": "abuzar.mirza@arthurlawrence.net"
            },
            "Balance": 670,
            "DeliveryInfo": {
                "DeliveryType": "Email",
                "DeliveryTime": "2022-08-03T09:00:21-07:00"
            }
        },
        {
            "AllowIPNPayment": false,
            "AllowOnlinePayment": false,
            "AllowOnlineCreditCardPayment": true,
            "AllowOnlineACHPayment": true,
            "EInvoiceStatus": "Viewed",
            "domain": "QBO",
            "sparse": false,
            "Id": "475",
            "SyncToken": "0",
            "MetaData": {
                "CreateTime": "2022-08-03T08:58:06-07:00",
                "LastUpdatedTime": "2022-09-03T22:58:35-07:00"
            },
            "CustomField": [],
            "DocNumber": "1007",
            "TxnDate": "2022-08-03",
            "CurrencyRef": {
                "value": "USD",
                "name": "United States Dollar"
            },
            "LinkedTxn": [],
            "Line": [
                {
                    "Id": "1",
                    "LineNum": 1,
                    "Amount": 1360,
                    "DetailType": "SalesItemLineDetail",
                    "SalesItemLineDetail": {
                        "ItemRef": {
                            "value": "2",
                            "name": "Sales"
                        },
                        "UnitPrice": 340,
                        "Qty": 4,
                        "ItemAccountRef": {
                            "value": "6",
                            "name": "Sales"
                        },
                        "TaxCodeRef": {
                            "value": "NON"
                        }
                    }
                },
                {
                    "Amount": 1360,
                    "DetailType": "SubTotalLineDetail",
                    "SubTotalLineDetail": {}
                }
            ],
            "CustomerRef": {
                "value": "17",
                "name": "FMCA"
            },
            "BillAddr": {
                "Id": "9",
                "Line1": "FMCA"
            },
            "SalesTermRef": {
                "value": "4",
                "name": "Net 30"
            },
            "DueDate": "2022-09-02",
            "TotalAmt": 1360,
            "ApplyTaxAfterDiscount": false,
            "PrintStatus": "NotSet",
            "EmailStatus": "EmailSent",
            "BillEmail": {
                "Address": "abuzar.mirza@arthurlawrence.net"
            },
            "Balance": 1360,
            "DeliveryInfo": {
                "DeliveryType": "Email",
                "DeliveryTime": "2022-08-03T08:58:23-07:00"
            }
        },
        {
            "AllowIPNPayment": false,
            "AllowOnlinePayment": false,
            "AllowOnlineCreditCardPayment": true,
            "AllowOnlineACHPayment": true,
            "EInvoiceStatus": "Viewed",
            "domain": "QBO",
            "sparse": false,
            "Id": "351",
            "SyncToken": "1",
            "MetaData": {
                "CreateTime": "2022-07-25T11:15:58-07:00",
                "LastUpdatedTime": "2022-09-03T22:58:35-07:00"
            },
            "CustomField": [],
            "DocNumber": "1004",
            "TxnDate": "2022-07-25",
            "CurrencyRef": {
                "value": "USD",
                "name": "United States Dollar"
            },
            "LinkedTxn": [
                {
                    "TxnId": "352",
                    "TxnType": "Payment"
                }
            ],
            "Line": [
                {
                    "Id": "1",
                    "LineNum": 1,
                    "Description": "Item for testing",
                    "Amount": 162,
                    "DetailType": "SalesItemLineDetail",
                    "SalesItemLineDetail": {
                        "ItemRef": {
                            "value": "2",
                            "name": "Sales"
                        },
                        "UnitPrice": 54,
                        "Qty": 3,
                        "ItemAccountRef": {
                            "value": "6",
                            "name": "Sales"
                        },
                        "TaxCodeRef": {
                            "value": "NON"
                        }
                    }
                },
                {
                    "Amount": 162,
                    "DetailType": "SubTotalLineDetail",
                    "SubTotalLineDetail": {}
                }
            ],
            "CustomerRef": {
                "value": "17",
                "name": "FMCA"
            },
            "BillAddr": {
                "Id": "6",
                "Line1": "FMCA"
            },
            "SalesTermRef": {
                "value": "4",
                "name": "Net 30"
            },
            "DueDate": "2022-08-24",
            "TotalAmt": 162,
            "ApplyTaxAfterDiscount": false,
            "PrintStatus": "NotSet",
            "EmailStatus": "EmailSent",
            "BillEmail": {
                "Address": "abuzar.mirza@arthurlawrence.net"
            },
            "Balance": 0,
            "DeliveryInfo": {
                "DeliveryType": "Email",
                "DeliveryTime": "2022-07-25T11:16:16-07:00"
            }
        },
        {
            "AllowIPNPayment": false,
            "AllowOnlinePayment": false,
            "AllowOnlineCreditCardPayment": true,
            "AllowOnlineACHPayment": true,
            "domain": "QBO",
            "sparse": false,
            "Id": "469",
            "SyncToken": "1",
            "MetaData": {
                "CreateTime": "2022-07-29T07:45:22-07:00",
                "LastUpdatedTime": "2022-07-29T07:50:54-07:00"
            },
            "CustomField": [],
            "DocNumber": "1006",
            "TxnDate": "2022-07-29",
            "CurrencyRef": {
                "value": "USD",
                "name": "United States Dollar"
            },
            "LinkedTxn": [
                {
                    "TxnId": "470",
                    "TxnType": "Payment"
                }
            ],
            "Line": [
                {
                    "Id": "1",
                    "LineNum": 1,
                    "Amount": 45000,
                    "DetailType": "SalesItemLineDetail",
                    "SalesItemLineDetail": {
                        "ItemRef": {
                            "value": "2",
                            "name": "Sales"
                        },
                        "UnitPrice": 15000,
                        "Qty": 3,
                        "ItemAccountRef": {
                            "value": "6",
                            "name": "Sales"
                        },
                        "TaxCodeRef": {
                            "value": "NON"
                        }
                    }
                },
                {
                    "Amount": 45000,
                    "DetailType": "SubTotalLineDetail",
                    "SubTotalLineDetail": {}
                }
            ],
            "CustomerRef": {
                "value": "17",
                "name": "FMCA"
            },
            "BillAddr": {
                "Id": "8",
                "Line1": "FMCA"
            },
            "SalesTermRef": {
                "value": "4",
                "name": "Net 30"
            },
            "DueDate": "2022-08-28",
            "TotalAmt": 45000,
            "ApplyTaxAfterDiscount": false,
            "PrintStatus": "NotSet",
            "EmailStatus": "EmailSent",
            "BillEmail": {
                "Address": "abuzar.mirza@arthurlawrene.net"
            },
            "Balance": 33000,
            "DeliveryInfo": {
                "DeliveryType": "Email",
                "DeliveryTime": "2022-07-29T07:45:45-07:00",
                "DeliveryErrorType": "Bounced Email"
            }
        },
        {
            "AllowIPNPayment": false,
            "AllowOnlinePayment": false,
            "AllowOnlineCreditCardPayment": true,
            "AllowOnlineACHPayment": true,
            "EInvoiceStatus": "Sent",
            "domain": "QBO",
            "sparse": false,
            "Id": "467",
            "SyncToken": "1",
            "MetaData": {
                "CreateTime": "2022-07-29T07:38:42-07:00",
                "LastUpdatedTime": "2022-07-29T07:41:39-07:00"
            },
            "CustomField": [],
            "DocNumber": "1005",
            "TxnDate": "2022-07-29",
            "CurrencyRef": {
                "value": "USD",
                "name": "United States Dollar"
            },
            "LinkedTxn": [
                {
                    "TxnId": "468",
                    "TxnType": "Payment"
                }
            ],
            "Line": [
                {
                    "Id": "1",
                    "LineNum": 1,
                    "Amount": 6250,
                    "DetailType": "SalesItemLineDetail",
                    "SalesItemLineDetail": {
                        "ItemRef": {
                            "value": "2",
                            "name": "Sales"
                        },
                        "UnitPrice": 1250,
                        "Qty": 5,
                        "ItemAccountRef": {
                            "value": "6",
                            "name": "Sales"
                        },
                        "TaxCodeRef": {
                            "value": "NON"
                        }
                    }
                },
                {
                    "Amount": 6250,
                    "DetailType": "SubTotalLineDetail",
                    "SubTotalLineDetail": {}
                }
            ],
            "CustomerRef": {
                "value": "17",
                "name": "FMCA"
            },
            "BillAddr": {
                "Id": "7",
                "Line1": "FMCA"
            },
            "SalesTermRef": {
                "value": "4",
                "name": "Net 30"
            },
            "DueDate": "2022-08-28",
            "TotalAmt": 6250,
            "ApplyTaxAfterDiscount": false,
            "PrintStatus": "NotSet",
            "EmailStatus": "EmailSent",
            "BillEmail": {
                "Address": "abuzar.mirza@arthurlawrence.net"
            },
            "Balance": 3250,
            "DeliveryInfo": {
                "DeliveryType": "Email",
                "DeliveryTime": "2022-07-29T07:40:35-07:00"
            }
        },
        {
            "AllowIPNPayment": false,
            "AllowOnlinePayment": false,
            "AllowOnlineCreditCardPayment": true,
            "AllowOnlineACHPayment": true,
            "EInvoiceStatus": "Viewed",
            "domain": "QBO",
            "sparse": false,
            "Id": "253",
            "SyncToken": "0",
            "MetaData": {
                "CreateTime": "2022-06-10T10:49:13-07:00",
                "LastUpdatedTime": "2022-06-10T11:47:58-07:00"
            },
            "CustomField": [],
            "DocNumber": "1002",
            "TxnDate": "2022-06-10",
            "CurrencyRef": {
                "value": "USD",
                "name": "United States Dollar"
            },
            "LinkedTxn": [],
            "Line": [
                {
                    "Id": "1",
                    "LineNum": 1,
                    "Amount": 12750,
                    "DetailType": "SalesItemLineDetail",
                    "SalesItemLineDetail": {
                        "ItemRef": {
                            "value": "2",
                            "name": "Sales"
                        },
                        "UnitPrice": 150,
                        "Qty": 85,
                        "ItemAccountRef": {
                            "value": "6",
                            "name": "Sales"
                        },
                        "TaxCodeRef": {
                            "value": "NON"
                        }
                    }
                },
                {
                    "Amount": 12750,
                    "DetailType": "SubTotalLineDetail",
                    "SubTotalLineDetail": {}
                }
            ],
            "CustomerRef": {
                "value": "17",
                "name": "FMCA"
            },
            "BillAddr": {
                "Id": "4",
                "Line1": "FMCA"
            },
            "SalesTermRef": {
                "value": "5",
                "name": "Net 60"
            },
            "DueDate": "2022-08-09",
            "TotalAmt": 12750,
            "ApplyTaxAfterDiscount": false,
            "PrintStatus": "NotSet",
            "EmailStatus": "EmailSent",
            "BillEmail": {
                "Address": "abuzar.mirza@arthurlawrence.net"
            },
            "BillEmailBcc": {
                "Address": "wajiha.danish@arthurlawrence.net"
            },
            "Balance": 12750,
            "DeliveryInfo": {
                "DeliveryType": "Email",
                "DeliveryTime": "2022-06-10T10:49:39-07:00"
            }
        },
        {
            "AllowIPNPayment": false,
            "AllowOnlinePayment": false,
            "AllowOnlineCreditCardPayment": true,
            "AllowOnlineACHPayment": true,
            "EInvoiceStatus": "Viewed",
            "domain": "QBO",
            "sparse": false,
            "Id": "252",
            "SyncToken": "0",
            "MetaData": {
                "CreateTime": "2022-06-10T10:47:29-07:00",
                "LastUpdatedTime": "2022-06-10T11:47:58-07:00"
            },
            "CustomField": [],
            "DocNumber": "1001",
            "TxnDate": "2022-06-10",
            "CurrencyRef": {
                "value": "USD",
                "name": "United States Dollar"
            },
            "LinkedTxn": [],
            "Line": [
                {
                    "Id": "1",
                    "LineNum": 1,
                    "Amount": 8400,
                    "DetailType": "SalesItemLineDetail",
                    "SalesItemLineDetail": {
                        "ItemRef": {
                            "value": "2",
                            "name": "Sales"
                        },
                        "UnitPrice": 150,
                        "Qty": 56,
                        "ItemAccountRef": {
                            "value": "6",
                            "name": "Sales"
                        },
                        "TaxCodeRef": {
                            "value": "NON"
                        }
                    }
                },
                {
                    "Amount": 8400,
                    "DetailType": "SubTotalLineDetail",
                    "SubTotalLineDetail": {}
                }
            ],
            "CustomerRef": {
                "value": "17",
                "name": "FMCA"
            },
            "BillAddr": {
                "Id": "3",
                "Line1": "FMCA"
            },
            "SalesTermRef": {
                "value": "4",
                "name": "Net 30"
            },
            "DueDate": "2022-07-10",
            "TotalAmt": 8400,
            "ApplyTaxAfterDiscount": false,
            "PrintStatus": "NotSet",
            "EmailStatus": "EmailSent",
            "BillEmail": {
                "Address": "abuzar.mirza@arthurlawrence.net"
            },
            "BillEmailBcc": {
                "Address": "wajiha.danish@arthurlawrence.net"
            },
            "Balance": 8400,
            "DeliveryInfo": {
                "DeliveryType": "Email",
                "DeliveryTime": "2022-06-10T10:48:03-07:00"
            }
        },
        {
            "AllowIPNPayment": false,
            "AllowOnlinePayment": false,
            "AllowOnlineCreditCardPayment": true,
            "AllowOnlineACHPayment": true,
            "EInvoiceStatus": "Viewed",
            "domain": "QBO",
            "sparse": false,
            "Id": "254",
            "SyncToken": "0",
            "MetaData": {
                "CreateTime": "2022-06-10T10:50:55-07:00",
                "LastUpdatedTime": "2022-06-10T11:47:03-07:00"
            },
            "CustomField": [],
            "DocNumber": "1003",
            "TxnDate": "2022-05-17",
            "CurrencyRef": {
                "value": "USD",
                "name": "United States Dollar"
            },
            "LinkedTxn": [],
            "Line": [
                {
                    "Id": "1",
                    "LineNum": 1,
                    "Amount": 39750,
                    "DetailType": "SalesItemLineDetail",
                    "SalesItemLineDetail": {
                        "ItemRef": {
                            "value": "2",
                            "name": "Sales"
                        },
                        "UnitPrice": 150,
                        "Qty": 265,
                        "ItemAccountRef": {
                            "value": "6",
                            "name": "Sales"
                        },
                        "TaxCodeRef": {
                            "value": "NON"
                        }
                    }
                },
                {
                    "Amount": 39750,
                    "DetailType": "SubTotalLineDetail",
                    "SubTotalLineDetail": {}
                }
            ],
            "CustomerRef": {
                "value": "17",
                "name": "FMCA"
            },
            "BillAddr": {
                "Id": "5",
                "Line1": "FMCA"
            },
            "SalesTermRef": {
                "value": "3",
                "name": "Net 15"
            },
            "DueDate": "2022-06-01",
            "TotalAmt": 39750,
            "ApplyTaxAfterDiscount": false,
            "PrintStatus": "NotSet",
            "EmailStatus": "EmailSent",
            "BillEmail": {
                "Address": "abuzar.mirza@arthurlawrence.net"
            },
            "BillEmailBcc": {
                "Address": "wajiha.danish@arthurlawrence.net"
            },
            "Balance": 39750,
            "DeliveryInfo": {
                "DeliveryType": "Email",
                "DeliveryTime": "2022-06-10T10:51:11-07:00"
            }
        }
    ],
    "startPosition": 1,
    "maxResults": 8,
    "totalCount": 8
}
export default revenue