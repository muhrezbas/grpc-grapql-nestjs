export enum NotificationEventType {
  TABLET_TRANSACTION_MPM_SUCCESS = 'tablet_transaction_mpm_success',
  TABLET_TRANSACTION_STATIC_QR_SUCCESS = 'tablet_transaction_static_qr_success',
  TABLET_TRANSACTION_CPM_SUCCESS = 'tablet_transaction_cpm_success',
  TABLET_TRANSACTION_CASH_SUCCESS = 'tablet_transaction_cash_success',
  PHP_TRANSACTION_SUCCESS = 'php_transaction_success',
  PHP_COURIER_FOUND = 'php_courier_found',
  PHP_COURIER_NOT_FOUND = 'php_courier_not_found',
  SNAP_CLAIM_STAMP_SUCCESS = 'snap_claim_stamp_success',
  SNAP_REDEEM_STAMP_SUCCESS = 'snap_redeem_stamp_success',
  SNAP_CLAIM_VOUCHER_SUCCESS = 'snap_claim_voucher_success',
  SNAP_REDEEM_VOUCHER_SUCCESS = 'snap_redeem_voucher_success',
  SNAP_REDEEM_VOUCHER_FAILED = 'snap_redeem_voucher_failed',
}
