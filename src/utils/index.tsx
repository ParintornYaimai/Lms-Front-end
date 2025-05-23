
export const shouldHideTopNavbar = (pathname: string): boolean => {
  return ['/auth/login', '/auth/register-student','/auth/register-teacher','/reset-password/forgot-password',
    '/reset-password/set-password','/reset-password/verifycode'].includes(pathname)
}