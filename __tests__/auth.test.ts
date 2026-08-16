describe('Private Coach Auth', () => {
  const DEMO_EMAIL = 'demo@coach.sa';
  const DEMO_PASS = 'Demo123!';

  function validateLogin(email: string, password: string) {
    if (!email || !password) return { error: 'All fields are required', status: 400 };
    if (!email.includes('@')) return { error: 'Invalid email', status: 400 };
    if (email.toLowerCase() !== DEMO_EMAIL || password !== DEMO_PASS) {
      return { error: 'Invalid credentials', status: 401 };
    }
    return { user: { email, name: 'Demo Coach' } };
  }

  function validateRegister(name: string, email: string, password: string, role: string) {
    if (!name || !email || !password || !role) return { error: 'All fields required', status: 400 };
    if (password.length < 8) return { error: 'Password too short', status: 400 };
    if (!['trainee', 'coach'].includes(role)) return { error: 'Invalid role', status: 400 };
    return { user: { name, email, role } };
  }

  test('login rejects empty fields', () => {
    expect(validateLogin('', 'pass')).toHaveProperty('error');
    expect(validateLogin('a@b.com', '')).toHaveProperty('error');
  });

  test('login rejects invalid email format', () => {
    expect(validateLogin('notanemail', 'pass')).toHaveProperty('error');
  });

  test('login rejects wrong credentials', () => {
    expect(validateLogin('wrong@email.com', 'wrong').status).toBe(401);
  });

  test('login accepts demo credentials', () => {
    const r = validateLogin(DEMO_EMAIL, DEMO_PASS);
    expect(r).toHaveProperty('user');
  });

  test('register rejects empty fields', () => {
    expect(validateRegister('', 'a@b.com', 'pass1234', 'trainee')).toHaveProperty('error');
  });

  test('register rejects short password', () => {
    expect(validateRegister('Test', 'a@b.com', 'short', 'trainee').status).toBe(400);
  });

  test('register rejects invalid role', () => {
    expect(validateRegister('Test', 'a@b.com', 'password123', 'admin').status).toBe(400);
  });

  test('register accepts valid input', () => {
    const r = validateRegister('Test User', 'test@example.com', 'password123', 'trainee');
    expect(r).toHaveProperty('user');
    expect((r as any).user.role).toBe('trainee');
  });
});
