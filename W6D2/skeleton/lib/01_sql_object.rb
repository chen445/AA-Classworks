require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    columns = DBConnection.execute2(<<-SQL).first
    Select
      *
    FROM 
      #{table_name}
    SQL

    columns.map!{|column| column.to_sym}
  end

  def self.finalize!
    self.columns.each do |column|
        define_method(column) do 
          self.attributes[column]
        end
        define_method("#{column}=") do |arg|
          self.attributes[column]=arg
        end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name || "#{self}".downcase.pluralize
  end

  def self.all
    array = DBConnection.execute(<<-SQL)
    Select
      #{table_name}.*
    from
      #{table_name}
    
    SQL
    parse_all(array)
  end

  def self.parse_all(results)
    results.map{|result| self.new(result)}
  end

  def self.find(id)
    result = DBConnection.execute(<<-SQL, id)
    Select
      #{table_name}.*
    from
      #{table_name}.*
    Where
      #{table_name}.id = ?
    SQL

    parse_all(result).frist
  end

  def initialize(params = {})
    # ...
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    raise "#{self} not in database" unless self.id
    DBConnection.execute(<<-SQL, *arg, id)
      UPDATE
       
      SET
        
      WHERE
        id = ?
    SQL
  end

  def save
    # ...
  end
end
