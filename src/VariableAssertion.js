export class VariableAssertion {
  static assertStringIsNotNullOrEmpty(value) {
    return !(value == null || typeof value !== 'string' || value === '');
  }
}
