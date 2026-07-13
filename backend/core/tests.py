from django.test import Client, TestCase, override_settings


class SecurityHeadersTests(TestCase):
    def setUp(self):
        self.client = Client()

    def test_standard_security_headers_are_present(self):
        response = self.client.get('/api/schema/')

        self.assertEqual(response.headers['X-Frame-Options'], 'SAMEORIGIN')
        self.assertEqual(
            response.headers['X-Content-Type-Options'],
            'nosniff',
        )
        self.assertEqual(
            response.headers['Referrer-Policy'],
            'strict-origin-when-cross-origin',
        )
        self.assertIn('default-src', response.headers['Content-Security-Policy'])
        self.assertIn(
            'frame-ancestors',
            response.headers['Content-Security-Policy'],
        )
        self.assertIn('camera=()', response.headers['Permissions-Policy'])

    def test_hsts_header_is_not_sent_when_disabled(self):
        insecure_response = self.client.get('/api/schema/')
        secure_response = self.client.get('/api/schema/', secure=True)

        self.assertNotIn('Strict-Transport-Security', insecure_response.headers)
        self.assertNotIn('Strict-Transport-Security', secure_response.headers)

    @override_settings(
        SECURE_HSTS_SECONDS=31536000,
        SECURE_HSTS_INCLUDE_SUBDOMAINS=True,
        SECURE_HSTS_PRELOAD=True,
    )
    def test_hsts_header_is_sent_over_https_when_enabled(self):
        insecure_response = self.client.get('/api/schema/')
        secure_response = self.client.get('/api/schema/', secure=True)

        self.assertNotIn('Strict-Transport-Security', insecure_response.headers)
        self.assertEqual(
            secure_response.headers['Strict-Transport-Security'],
            'max-age=31536000; includeSubDomains; preload',
        )
