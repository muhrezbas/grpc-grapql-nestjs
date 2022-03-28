export const GET_ISSUER_NAME_QUERY_STRING = `SELECT (CASE
                                            WHEN
                                                    substr(tlog.TXNLPATTERNA, 0, 2) = '62'
                                                    AND be.bevtlongname = 'Money Customer Purchase'
                                                THEN
                                                'Cash'
                                            WHEN
                                                    substr(tlog.TXNLPATTERNA, 0, 2) = '62'
                                                    AND be.bevtlongname = 'Customer Purchase'
                                                THEN
                                                'LINKAJA'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600918'
                                                THEN
                                                'SHOPEEPAY'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600914'
                                                THEN
                                                'GOPAY'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600912'
                                                THEN
                                                'OVO'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600915'
                                                THEN
                                                'DANA'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600014'
                                                THEN
                                                'BCA'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600503'
                                                THEN
                                                'NOBU EPAY'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600426'
                                                THEN
                                                'Bank Mega'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600013'
                                                THEN
                                                'Bank Permata'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600898'
                                                THEN
                                                'Telkom'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600153'
                                                THEN
                                                'Bank Sinarmas'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600016'
                                                THEN
                                                'Maybank'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600009'
                                                THEN
                                                'Bank BNI'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600002'
                                                THEN
                                                'Bank BRI'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600008'
                                                THEN
                                                'Bank Mandiri'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600011'
                                                THEN
                                                'Bank Danamon'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600022'
                                                THEN
                                                'CIMB Niaga'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600110'
                                                THEN
                                                'Bank BJB'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600111'
                                                THEN
                                                'Bank DKI'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600114'
                                                THEN
                                                'Bank JATIM'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600118'
                                                THEN
                                                'Bank Nagari'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600129'
                                                THEN
                                                'BPD Bali'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600451'
                                                THEN
                                                'Bank Syariah Mandiri'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600811'
                                                THEN
                                                'OTTOCASH'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600023'
                                                THEN
                                                'UOB'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600484'
                                                THEN
                                                'Hanna Bank'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600213'
                                                THEN
                                                'Jenius'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600028'
                                                THEN
                                                'OCBC'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600126'
                                                THEN
                                                'Bank Sulselbar'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600917'
                                                THEN
                                                'Paytren'
                                            WHEN
                                                substr(tlog.TXNLPATTERNA, 0, 8) = '93600899'
                                                THEN
                                                'Doku'
                                            WHEN tlog.TXNLPATTERNA = 'KREDIVO' THEN 'KREDIVO'
                                            WHEN tlog.txnlpatterna = 'LINKAJA' THEN 'LINKAJA'
                                            WHEN tlog.TXNLPATTERNA = 'DANA' THEN 'DANA'
                                            WHEN tlog.TXNLPATTERNA = 'SHOPEEPAY' THEN 'SHOPEEPAY'
                                            WHEN tlog.TXNLPATTERNA = 'CASHBAC' THEN 'CASHBAC'
                                            WHEN tlog.TXNLPATTERNA = 'Bank BRI' THEN 'Bank BRI'
                                            WHEN tlog.TXNLPATTERNA = 'YTI_VOUCHER' THEN 'YTI_VOUCHER'
                                            ELSE
                                                'Other'
    END
                                           )
                                           AS cashless_iss_cust_id
                                FROM log.TRANSACTIONLOG tlog,
                                     BILLING.BILLABLEEVENTS be
                                WHERE tlog.BEVTID1 = be.BEVTID
                                  AND tlog.TXNLID = :ytTrxId`;
