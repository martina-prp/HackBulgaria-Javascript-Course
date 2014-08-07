# Refactoring the Pyramid of Doom

In `app.js`, there is a pyramid of doom.

Two async functions that need to be executed one after another.

When `first()` finishes, we should call `second()`, and when `second()` finishes we should call `third()`

Very quickly, we are going into [callback-hell](http://callbackhell.com/) land!

Use the required `Q` library and refactor the code so it uses promises!

You may want to use `Q.defer()` for that - https://github.com/kriskowal/q#the-beginning


f. g = f(g(x)) kompoziciq na funkcii
i dvete trqbva da vrysjtat stoinost
function compose(f, g) {
	return function(x) {
	return f(g(x));
	}
}

Promises: returned value of async functions; 
then(callback ili dr funkciq, koqto vryshta promise)

q e biblioteka, koqto implementira specifikaciqta na promises

defer(Promise) object ima 2 metoda: resolve(shte dade otg) i reject(nqma da dade otg i shte ima greshka -private
var defer = Q.defer();
defer.resolve()
return defer.promise; -  za da moje da se zakachi then

Q.fcall(first) - priema funkciq, koqto vryshta promise
	.then(funcrion(res) {
		return delayedSquared(res);
	})

Q.fcall(first) - priema funkciq, koqto vryshta promise
	.then(delayedSquared) { // ako e dr promise moje damu se zakachi nov then
		.then(function(squared) {
		console.log(squared);
		})
	})
	.catch(functiom(error) {
		console.log(error);
	})
	.done();