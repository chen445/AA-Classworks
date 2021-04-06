class Employee
    attr_reader :name, :title, :salary 
    attr_accessor :boss
    def initialize(name,salary,title,boss = nil)
        @name = name
        @title = title
        @salary = salary
        if boss != nil
            self.boss=(boss)
        end
        self.boss = boss
    end

    def boss=(boss)
        @boss = boss

        boss.add_employee(self) unless boss.nil?
        boss
    end

    def bonus(multiplier)
        self.salary * multiplier
    end
end

class Manager < Employee
    attr_reader :employees
    def initialize(name,salary,title,boss=nil)
        super(name,salary,title,boss)
        @employees = []
    end

    def add_employee(sub_emp)
        employees << sub_emp
        sub_emp
    end


    def total_salary
        total = 0
        self.employees.each do |emp|
            if emp.is_a?(Manager) 
                total += emp.salary + emp.total_salary
            else
                total += emp.salary
            end
        end
        total
    end

    def bonus(multiplier)
        self.total_salary * multiplier
    end
end

# ned = Manager.new('ned',1000000,"founder")
darren = Manager.new('darren',780000,"TAManager")
david = Employee.new('david',120000,"TA",'darren')
# darren.boss=("ned")
# david.boss=("darren")

# p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3)