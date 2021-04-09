require 'rspec'
require 'tdd'

describe '#my_uniq' do 
    it 'should accept an array as an argument' do 
        expect{my_uniq([1,2,1,3,3])}.to_not raise_error
    end

    it 'should return a new array with uniqe elements'do 
        expect(my_uniq([1,2,1,3,3])).to eq([1,2,3])
    end
end

describe 'Array' do 
    describe '#two_sum' do
        context 'when the array contains number of element' do
            it 'should return the indeces at those positions that sum to zero'do 
            expect([-1,0,2,-2,1].two_sum).to eq([[0,4], [2,3]])
            end
        end
    end

    describe '#my_transpose' do 
        it "should transpose a 2D array" do 
            rows = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8]
            ]
            expected_rows =[
                            [0, 3, 6],
                            [1, 4, 7],
                            [2, 5, 8]
                            ]
            expect(rows.my_transpose).to eq(expected_rows)
        end
        it "should not use build in Array #transpose" do 
            arr = [ 
                ["a","b"],
                ["c","d"]
            ]
            expect(arr).to_not receive(:transpose)
            arr.my_transpose
        end 
    end
 end 

 describe '#stock_picker' do 
    it 'should accept an array as an argument' do 
        expect{stock_picker([1,2,3,4,5])}.to_not raise_error
    end

    it 'should return the most profitable pair of days to buy and sell'do 
        expect(stock_picker([1,2,3,4,5])).to eq([1,5])
    end
    
 end

 describe 'Towers' do
    subject(:towers) {Towers.new}
    describe '#initialize' do
        it 'set a 2d array to represent the piles' do
            expect{towers.piles}.to_not raise_error
        end

        it 'create an array to score disks' do 
            expect(towers.discs).to eq([1,2,3,4,5])
        end

        it 'starts won to be false' do
            expect(towers.won).to be(false)
        end

        it 'should populate left most pile with discs' do
            expect(towers.piles).to eq([[1,2,3,4,5],[],[]])
        end 
    end

    describe '#ask_user' do
        
    end
 end

