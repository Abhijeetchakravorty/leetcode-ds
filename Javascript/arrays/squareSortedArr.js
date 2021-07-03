var squaredElements = function(elements) {
    let self = this;
    self.i = 0;
    self.flag = false;
    while(self.i<elements.length) {
        if (!self.flag) {
            elements[self.i] = Math.pow(elements[self.i], 2);
            self.i++;
            if (self.i+1 == elements.length) {
                self.flag = true;
                self.i = 0;
            }
        } else {
            if (elements[self.i] < elements[self.i+1] && elements[self.i+1] !== undefined) {
                self.temp = elements[self.i]; 
                elements[i] = elements[self.i+1]
                elements[i+1] = self.temp;
                self.i = 0;
            } else {
                self.i++;
            }
        }
    }
    return elements;
}

console.log(squaredElements([-4,-1,0,3,10]))