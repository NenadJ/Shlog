function Slog() {
  console.log('Created');
}

Slog.prototype.log = (data) => {
  console.log(data ? data : 'pera');
};

const sh = new Slog();