Auth routes:
  - /api/auth/register:
    - Take in {username: :?, password: :?} || return httpResponse with status Bad_Request or OK
  - /api/auth/login
    - Take in {username: :?, password: ?} || return {accessToken: :?, tokenType: "Bearer "}
    
